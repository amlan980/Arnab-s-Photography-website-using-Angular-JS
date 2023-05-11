import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiceceremonyComponent } from './riceceremony.component';

describe('RiceceremonyComponent', () => {
  let component: RiceceremonyComponent;
  let fixture: ComponentFixture<RiceceremonyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiceceremonyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiceceremonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
