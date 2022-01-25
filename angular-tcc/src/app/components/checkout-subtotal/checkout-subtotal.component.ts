import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-checkout-subtotal',
  templateUrl: './checkout-subtotal.component.html',
  styleUrls: ['./checkout-subtotal.component.css'],
})
export class CheckoutSubtotalComponent implements OnInit {
  constructor(
    public shoppingCart: ShoppingCartService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  pagamento() {
    this.router.navigate(['pagamento']);
  }
}
