import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Stock } from '../../interfaces/stock.interface';

@Component({
  selector: 'app-stock-table-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stock-table-widget.component.html',
  styleUrls: ['./stock-table-widget.component.scss']
})
export class StockTableWidgetComponent {
  @ViewChild('customModal', { static: false }) customModal!: ElementRef; // Reference to the modal element
  @Input() stocks = new Array<Stock>(); // Input property for the array of stocks
  @Output() selectedStock = new EventEmitter<Stock>(); // Output event for selecting a stock
  @Output() deleteStock = new EventEmitter<Stock | null>(); // Output event for deleting a stock
  stockToDelete: Stock | null = null; // Holds the stock that is selected for deletion

  /**
   * Emits the selected stock when a stock symbol is clicked.
   * @param stock - The stock object that was clicked.
   */
  selectStockSymbol(stock: Stock) {
    this.selectedStock.emit(stock); // Emit the selected stock to the parent component
  }

  /**
   * Opens the delete confirmation modal for the selected stock.
   * @param stock - The stock object that the user intends to delete.
   */
  deleteSelectedStock(stock: Stock) {
    this.stockToDelete = stock; 
    this.customModal.nativeElement.classList.add('show');
  }

  /**
   * Confirms the deletion of the selected stock and emits the event.
   * If confirmed, it closes the modal.
   */
  confirmDelete() {
    this.deleteStock.emit(this.stockToDelete);
    this.closeModal();
  }

  /**
   * Closes the delete confirmation modal.
   */
  closeModal() {
    this.customModal.nativeElement.classList.remove('show');
  }
}
