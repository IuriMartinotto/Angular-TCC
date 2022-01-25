import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
})
export class ProdutosComponent implements OnInit {
  @Input() produtos: any[''];
  constructor(
    private shopping_cart: ShoppingCartService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  addCarrinho(produto: any) {
    this.shopping_cart.addProduto(produto);
  }

  detalhe(produto: any) {
    console.log(produto);
    this.router.navigate(['detalhe', produto], { relativeTo: this.route });
  }
}
