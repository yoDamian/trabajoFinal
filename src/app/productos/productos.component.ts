import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'] 
})
export class ProductosComponent implements OnInit {
  @Input() productos: any[] = [];
  @Output() newProduct = new EventEmitter<string>();
  producto: string = '';

  ngOnInit(): void {
  }

  addProduct() {
    this.newProduct.emit(this.producto);
    this.producto = '';
  }
}

