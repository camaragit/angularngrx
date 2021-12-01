import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  getAllProduct(): Observable<Product[]>{
    return this.http.get<Product[]>(environment.host+'products');
  }
  getAvailableProduct(): Observable<Product[]>{
    return this.http.get<Product[]>(environment.host+'products?available=true');
  }
  getAlltSelectedProduct(): Observable<Product[]>{
    return this.http.get<Product[]>(environment.host+'products?selected=true');
  }
  seachProducts(name:string): Observable<Product[]>{
    return this.http.get<Product[]>(environment.host+'products?name_like='+name);
  }
  selectProduct(prd:Product): Observable<Product>{
    prd.selected = !prd.selected;
    return this.http.put<Product>(environment.host+'products/'+prd.id,prd);
  }
  deleteProduct(prod:Product):Observable<void>{
   return this.http.delete<void>(environment.host+'products/'+prod.id);
  }
  addProduct(prd:Product): Observable<Product>{
    return this.http.post<Product>(environment.host+'products/',prd);
  }
  getProductById(id:string): Observable<Product>{
    return this.http.get<Product>(environment.host+'products/'+id);
  }
}
