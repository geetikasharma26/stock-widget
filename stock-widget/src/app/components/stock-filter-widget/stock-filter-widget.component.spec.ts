import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockFilterWidgetComponent } from './stock-filter-widget.component';

describe('StockFilterWidgetComponent', () => {
  let component: StockFilterWidgetComponent;
  let fixture: ComponentFixture<StockFilterWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockFilterWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockFilterWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
