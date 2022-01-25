import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent implements OnInit {
  produtos: any[] = [];
  totalPedido: number = 0;

  constructor(public shopping_cart: ShoppingCartService) { }

  ngOnInit(): void {
    this.carregarCarrinho();
  }

  carregarCarrinho(){
    this.produtos = this.shopping_cart.get_shopping_cart_items();
    this.totalPedido = this.shopping_cart.getTotal() + 50 + 104.75;
    console.log(this.totalPedido);
  }

}
