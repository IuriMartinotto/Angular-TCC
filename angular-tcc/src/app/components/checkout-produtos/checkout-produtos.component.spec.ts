import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutProdutosComponent } from './checkout-produtos.component';

describe('CheckoutProdutosComponent', () => {
  let component: CheckoutProdutosComponent;
  let fixture: ComponentFixture<CheckoutProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutProdutosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
