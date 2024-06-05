import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products = [
    { name: 'Producto 1', price: 100 },
    { name: 'Producto 2', price: 200 }
  ];

  addProductToList(newProduct: { name: string, price: number }) {
    this.products.push(newProduct);
  }
}
