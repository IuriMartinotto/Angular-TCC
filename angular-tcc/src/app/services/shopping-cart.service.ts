import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  constructor() {}
  produtosCarrinho: any[] = [];

  addProduto = (produto: any) => {
    let itens = this.get_shopping_cart_items();

    if (itens) {
      itens.push(produto);
      localStorage.setItem('shopping_cart', JSON.stringify(itens));
    } else {
      this.produtosCarrinho.push(produto);
      localStorage.setItem(
        'shopping_cart',
        JSON.stringify(this.produtosCarrinho)
      );
    }
  };

  get_shopping_cart_items = () => {
    let itens = localStorage.getItem('shopping_cart');

    return JSON.parse(itens || '[]');
  };

  get_shopping_cart_length = () => {
    let produtos = this.get_shopping_cart_items();
    return produtos ? this.get_shopping_cart_items().length : 0;
  };

  getTotal = () => {
    let produtos = this.get_shopping_cart_items();
    return produtos?.reduce((acc: any, item: any) => acc + item.price, 0);
  };

  removeProduto = (p: any) => {
    console.log(p);
    let produtos = this.get_shopping_cart_items();
    const index = produtos.findIndex((x: any) => x.id == p.id);
    if (index >= 0) {
      console.log('entrou no if');
      console.log('antes de deletar',produtos);
      produtos.splice(index, 1);
      console.log(produtos);
      return localStorage.setItem('shopping_cart', JSON.stringify(produtos));
    }
  };
}
