<h1 align="center">Stock Dashboard App Details</h1>

## Running Application Locally

Clone the repo:

```
git clone https://github.com/geetikasharma26/stock-widget.git
```

Navigate to the project directory:
```
cd stock-widget
```

Install NPM Packages:

```
npm install
```

Run the Mock Backend:
To serve the mock backend using json-server, you'll need to install it globally:

```
npm install -g json-server
```

Navigate to the project directory in another terminal:
```
cd stock-widget
```
Start the mock server by executing:
```
npm start backend:mock
```
This command will run the mock backend on http://localhost:3000 by default, providing API endpoints to interact with the stock data.

Serve the Frontend Application
To serve the Angular application and watch for changes, use the following command:

```
npm start
```

This will compile the application and open it in your default web browser at http://localhost:4200.


**Major Features**:
View Stocks: Displays a list of stocks with details.
Filter Stocks: Allows users to filter stocks by tags.
View Stock Details: Click on a stock to view its detailed information.
Delete Stocks: Remove stocks from the list, with confirmation modal.

**API Endpoints**:
The following API endpoints are available when running the mock backend:

GET /stocks: Retrieve all stocks.
GET /stocks?tag=$Tag Retrieve all stocks for which tag matches
POST /stocks: Add a new stock entry.
DELETE /stocks/
: Delete a stock by ID.
