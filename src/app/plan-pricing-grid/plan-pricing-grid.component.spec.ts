import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanPricingGridComponent } from './plan-pricing-grid.component';

describe('PlanPricingGridComponent', () => {
  let component: PlanPricingGridComponent;
  let fixture: ComponentFixture<PlanPricingGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanPricingGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanPricingGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
