export interface Stock {
    id: string;          // Unique identifier for the stock
    symbol: string;      // Stock symbol (ticker)
    name: string;        // Full name of the company
    lastPrice: number;   // Last traded price of the stock
    marketCap: number;   // Market capitalization (in dollars)
    tag: string;         // Category or tag for the stock (e.g., "Tech", "Automotive")
  }
  