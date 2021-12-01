import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-nav-bar',
  templateUrl: './product-nav-bar.component.html',
  styleUrls: ['./product-nav-bar.component.scss']
})
export class ProductNavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onGetAllProduct(){}
  onGetSelectedProduct(){}
}
