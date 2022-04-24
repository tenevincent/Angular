import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Shared/product.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  title : string = 'My Second Angular App';
  imageUrl: string = "https://www.w3schools.com/w3css/img_5terre.jpg";
  isActive : boolean = false;



  products : Array<string>;

  constructor(productService: ProductService){
  this.products = productService.getProducts();
  }


  ngOnInit(): void {

  }

  onClick($event : Event){
    console.log("Clicked",$event)
    this.isActive =   this.isActive != true;;
  }




}
