import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.sass']
})

export class ListaProductosComponent implements OnInit {

  constructor(private api:ApiService) { }

  public productos = []
  public producto = ''

  ngOnInit() {
    this.api.getProductos().subscribe(productos=>{
      console.log('PRODUCTOS', productos);
      this.productos = productos
      
  })

}
}
