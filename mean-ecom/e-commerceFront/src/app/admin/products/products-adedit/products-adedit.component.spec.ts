import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsAdeditComponent } from './products-adedit.component';

describe('ProductsAdeditComponent', () => {
  let component: ProductsAdeditComponent;
  let fixture: ComponentFixture<ProductsAdeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsAdeditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsAdeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
