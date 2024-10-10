import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockDetailsWidgetComponent } from './stock-details-widget.component';

describe('StockDetailsWidgetComponent', () => {
  let component: StockDetailsWidgetComponent;
  let fixture: ComponentFixture<StockDetailsWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockDetailsWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockDetailsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
