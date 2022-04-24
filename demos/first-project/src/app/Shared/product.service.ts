import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProducts() : string[] {
    return ["Learning Angular 2","Pro TypeScript","ASP.NET"];
    }


  constructor() { }
}
