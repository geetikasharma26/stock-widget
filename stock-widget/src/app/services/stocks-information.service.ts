import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, shareReplay, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StocksInformationService {
  private apiUrl = 'http://localhost:3000/stocks';

  constructor(private httpClient: HttpClient) { }

  /**
   * Fetches stocks by the specified tag.
   * If the tag is 'All', retrieves all stocks.
   * @param tag - The tag to filter stocks by.
   * @returns An Observable containing the stocks that match the specified tag.
   */
  getStocksByTag(tag: string): Observable<any[]> {
    if (tag === 'All') {
      return this.httpClient.get<any[]>(`${this.apiUrl}`).pipe(
        shareReplay(1),
        catchError(error => {
          console.error('Error fetching stocks:', error);
          return of([]);
        })
      );
    }
    return this.httpClient.get<any[]>(`${this.apiUrl}?tag=${tag}`).pipe(
      shareReplay(1),
      catchError(error => {
        console.error('Error fetching stocks by tag:', error);
        return of([]);
      })
    );
  }

  /**
   * Retrieves all stocks from the API.
   * @returns An Observable containing all stocks.
   */
  getStocks$(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.apiUrl).pipe(
      shareReplay(1),
      catchError(error => {
        console.error('Error fetching all stocks:', error);
        return of([]);
      })
    );
  }

  /**
   * Retrieves unique tags from the stocks.
   * @returns An Observable containing unique stock tags.
   */
  getUniqueTags$(): Observable<string[]> {
    return this.getStocks$().pipe(
      map(stocks => {
        // Extract unique tags
        const allTags = stocks.map(stock => stock.tag);
        return [...new Set(allTags)];
      }),
      catchError(error => {
        console.error('Error fetching unique tags:', error);
        return of([]);
      })
    );
  }

  /**
   * Deletes a stock from the backend server based on its symbol.
   * @param symbol - The symbol of the stock to be deleted.
   * @returns An Observable indicating the completion of the delete operation.
   */
  deleteStock(symbol: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/${symbol}`).pipe(
      catchError(error => {
        console.error('Error deleting stock:', error);
        return of();
      })
    );
  }
}
