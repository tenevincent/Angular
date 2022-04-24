import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindings-demo',
  templateUrl: './bindings-demo.component.html',
  styleUrls: ['./bindings-demo.component.css']
})
export class BindingsDemoComponent implements OnInit {

   title :  string = "";

  constructor() { }

  ngOnInit(): void {

    this.title = "Interpolation binding";

  }

}
