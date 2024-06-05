import { Routes } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';
import { CardProductoComponent } from './card-producto/card-producto.component';
import { ModalProductoComponent } from './modal-producto/modal-producto.component';

export const routes: Routes = [
  { path: '', component: ProductosComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'card-producto', component: CardProductoComponent },
  { path: 'modal-producto', component: ModalProductoComponent }
];
