import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css'],
})
export class DetalheComponent implements OnInit {
  produtos: any[''];
  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private shopping_cart: ShoppingCartService
  ) {}

  produto: any;

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      const id = params['id'];
      this.getProdutos(id);
    });
  }

  getProdutos(id: any) {
    this.api.getJson().subscribe((res) => {
      this.produtos = res;
      this.produto = this.produtos.find((x: any) => x.id == id);
      console.log(this.produto);
    });
  }

  addCarrinho() {
    this.shopping_cart.addProduto(this.produto);
  }
}
