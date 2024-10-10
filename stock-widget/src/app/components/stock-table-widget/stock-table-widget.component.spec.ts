import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockTableWidgetComponent } from './stock-table-widget.component';

describe('StockTableWidgetComponent', () => {
  let component: StockTableWidgetComponent;
  let fixture: ComponentFixture<StockTableWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockTableWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockTableWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
