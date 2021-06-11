import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannersAdeditComponent } from './banners-adedit.component';

describe('BannersAdeditComponent', () => {
  let component: BannersAdeditComponent;
  let fixture: ComponentFixture<BannersAdeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannersAdeditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannersAdeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
