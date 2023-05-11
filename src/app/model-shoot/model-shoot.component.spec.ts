import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelShootComponent } from './model-shoot.component';

describe('ModelShootComponent', () => {
  let component: ModelShootComponent;
  let fixture: ComponentFixture<ModelShootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelShootComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelShootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
