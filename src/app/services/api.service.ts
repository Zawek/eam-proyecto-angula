import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection} from '@angular/fire/firestore';
import {ProductosInterface} from '../models/productos';
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private afs: AngularFirestore) {
    this.productsCollection = afs.collection<ProductosInterface>('productos');
    this.productos = this.productsCollection.valueChanges()
   }

   private productsCollection : AngularFirestoreCollection<ProductosInterface>
   private productos: Observable<ProductosInterface[]>

  getProductos(){
     return this.productos = this.productsCollection.snapshotChanges().pipe(map(
       changes =>{
         return changes.map(action=>{
           const data = action.payload.doc.data() as ProductosInterface;
           data.id = action.payload.doc.id;
           return data;
         })
       }
     ))
   }
}
