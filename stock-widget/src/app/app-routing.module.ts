import { NgModule, } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockTableWidgetComponent } from './components/stock-table-widget/stock-table-widget.component';
import { StockFilterWidgetComponent } from './components/stock-filter-widget/stock-filter-widget.component';
import { StockDetailsWidgetComponent } from './components/stock-details-widget/stock-details-widget.component';
import { StockWidgetComponent } from './components/stock-widget/stock-widget.component';

const routes: Routes = [
  { path: '', redirectTo: '/stocks', pathMatch: 'full' },
  { path: 'stocks', component: StockWidgetComponent },
  { path: '**', redirectTo: '/stocks' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
