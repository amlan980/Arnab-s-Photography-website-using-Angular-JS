import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperBodyImgComponent } from './wrapper-body-img.component';

describe('WrapperBodyImgComponent', () => {
  let component: WrapperBodyImgComponent;
  let fixture: ComponentFixture<WrapperBodyImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrapperBodyImgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WrapperBodyImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
