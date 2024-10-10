import { Routes } from '@angular/router';
import { StockWidgetComponent } from './components/stock-widget/stock-widget.component';

export const routes: Routes = [
  { path: '', redirectTo: '/stocks', pathMatch: 'full' },
  { path: 'stocks', component: StockWidgetComponent },
  { path: '**', redirectTo: '/stocks' }
];

