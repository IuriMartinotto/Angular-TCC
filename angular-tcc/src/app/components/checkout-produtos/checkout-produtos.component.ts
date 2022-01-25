import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-checkout-produtos',
  templateUrl: './checkout-produtos.component.html',
  styleUrls: ['./checkout-produtos.component.css'],
})
export class CheckoutProdutosComponent implements OnInit {
  @Input() checkout_products: any[] = [];
  @Output() deleteEvent: EventEmitter<any> = new EventEmitter();

  constructor(public shopping_cart_service: ShoppingCartService) {}

  ngOnInit(): void {
    console.log('produtos no carrinho', this.checkout_products);
  }

  removeProduto(p: any) {
    this.shopping_cart_service.removeProduto(p);
    this.deleteEvent.emit(p);
  }
}
