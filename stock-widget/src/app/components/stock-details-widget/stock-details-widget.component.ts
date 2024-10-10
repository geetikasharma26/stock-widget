import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Stock } from '../../interfaces/stock.interface';

@Component({
  selector: 'app-stock-details-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stock-details-widget.component.html',
  styleUrl: './stock-details-widget.component.scss'
})
export class StockDetailsWidgetComponent {
  @Input() stock: Stock|null = null;
}