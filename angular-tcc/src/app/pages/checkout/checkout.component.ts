import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  produtos: any[] = [];
  constructor(public shopping_cart: ShoppingCartService) { }

  ngOnInit(): void {
    this.carregarCarrinho();
  }

  carregarCarrinho(){
    this.produtos = this.shopping_cart.get_shopping_cart_items();
  }

  deleteEventHandler(){
    console.log('chegou no carregar');
    this.carregarCarrinho();
  }

}
