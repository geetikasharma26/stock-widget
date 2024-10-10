import { Component, OnInit } from '@angular/core';
import { StocksInformationService } from '../../services/stocks-information.service';
import { BehaviorSubject, catchError, Observable, of, switchMap } from 'rxjs';
import { StockFilterWidgetComponent } from '../stock-filter-widget/stock-filter-widget.component';
import { StockTableWidgetComponent } from '../stock-table-widget/stock-table-widget.component';
import { StockDetailsWidgetComponent } from '../stock-details-widget/stock-details-widget.component';
import { CommonModule } from '@angular/common';
import { Stock } from '../../interfaces/stock.interface';

@Component({
  selector: 'app-stock-widget',
  standalone: true,
  imports: [StockTableWidgetComponent, StockFilterWidgetComponent, StockDetailsWidgetComponent, CommonModule],
  templateUrl: './stock-widget.component.html',
  styleUrls: ['./stock-widget.component.scss']
})
export class StockWidgetComponent implements OnInit {
  // Observables to manage stock filtering and selection
  private selectedTag$: BehaviorSubject<string> = new BehaviorSubject<string>('All');
  uniqueTags$: Observable<string[]> = of([]); // Available tags for filtering
  filteredStocks$: Observable<Stock[]> = of([]); // Stocks displayed based on the selected tag
  selectedStock$: BehaviorSubject<Stock | null> = new BehaviorSubject<Stock | null>(null); // Currently selected stock

  constructor(private stockService: StocksInformationService) {}

  ngOnInit() {
    // Subscribe to selected tag changes and fetch filtered stocks
    this.filteredStocks$ = this.selectedTag$.pipe(
      switchMap((tag) =>
        this.stockService.getStocksByTag(tag).pipe(catchError(() => of([])))
      )
    );

    // Fetch unique tags for the filter widget
    this.uniqueTags$ = this.stockService.getUniqueTags$();
  }

  /** 
   * Update the selected tag and reset the selected stock 
   * when the user changes the tag in the filter.
   */
  onTagChange(tag: string) {
    this.selectedTag$.next(tag);
    this.selectedStock$.next(null);
  }

  /** 
   * Set the selected stock for details display when a stock is selected 
   */
  onSelectedStock(stock: Stock) {
    this.selectedStock$.next(stock);
  }

  /**
   * Delete a stock from the list and refresh the displayed stocks.
   * @param stockToDelete - The stock to be deleted
   */
  deleteStock(stockToDelete: Stock | null) {
    if (stockToDelete) {
      this.stockService.deleteStock(stockToDelete.id).subscribe(() => {
        // Refresh the filtered stocks based on the selected tag
        this.filteredStocks$ = this.selectedTag$.pipe(
          switchMap(tag => this.stockService.getStocksByTag(tag))
        );

        // Clear the selected stock if it was deleted
        if (this.selectedStock$.value?.id === stockToDelete.id) {
          this.selectedStock$.next(null);
        }
      });
    }
  }
}
