# Stock Management Application

This project is a demonstration of a Stock Management application built with Angular. It allows users to filter stocks, view details, and manage stock entries (add, delete). The application is connected to a mock backend for data persistence using `db.json`.

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name

Install npm Packages
To install the necessary npm packages described in package.json, run:
npm install

Run the Mock Backend
To serve the mock backend using json-server, you'll need to install it globally (if you haven't already):
npm install -g json-server

Once installed, start the mock server by executing:
npm start backend:mock
This command will run the mock backend on http://localhost:3000 by default, providing API endpoints to interact with the stock data.

Serve the Frontend Application
To serve the Angular application and watch for changes, use the following command:
npm start

This will compile the application and open it in your default web browser at http://localhost:4200. The npm start command will also watch for changes in your source files and automatically refresh the browser.

Major Features
View Stocks: Displays a list of stocks with details.
Filter Stocks: Allows users to filter stocks by tags.
View Stock Details: Click on a stock to view its detailed information.
Delete Stocks: Remove stocks from the list, with confirmation modal.

API Endpoints
The following API endpoints are available when running the mock backend:

GET /stocks: Retrieve all stocks.
POST /stocks: Add a new stock entry.
DELETE /stocks/
: Delete a stock by ID.
