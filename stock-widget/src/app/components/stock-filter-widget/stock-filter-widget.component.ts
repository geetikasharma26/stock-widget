import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { StocksInformationService } from '../../services/stocks-information.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stock-filter-widget',
  templateUrl: './stock-filter-widget.component.html',
  styleUrls: ['./stock-filter-widget.component.scss'],
  standalone: true, 
  imports: [ReactiveFormsModule, CommonModule],  
})
export class StockFilterWidgetComponent implements OnInit {
  stocksForm: FormGroup; // Reactive form for stock filters
  tags: string[] = []; // List of unique tags for filtering
  @Output() updatedTag = new EventEmitter<string>(); // Event emitted when the tag is updated

  constructor(private fb: FormBuilder, private stockService: StocksInformationService) {
    // Initialize the stocksForm with a default filter value
    this.stocksForm = this.fb.group({
      tagFilter: ['All'],
    });
  }

  ngOnInit(): void {
    // Fetch unique tags from the service and prepend 'All' to the tags array
    this.stockService.getUniqueTags$().subscribe((tags) => {
      this.tags = ['All', ...tags]; 
    });
  }

  /**
   * Emits the selected tag whenever the form value changes.
   * This method is called on the form control's value change.
   */
  onTagChange(): void {
    const selectedTag = this.stocksForm.get('tagFilter')?.value; // Get the current value of tagFilter
    this.updatedTag.emit(selectedTag); // Emit the selected tag to the parent component
  }
}
