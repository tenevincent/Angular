import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'bm-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {


  version: string;
  name: string = "";
  fruits: string[];
  public angularVersion: number;


  constructor() {
    this.version = "this is a new software version.";
    this.angularVersion = 3;
    this.fruits = ["Fruits", "Apples", "Oranges"];

  }

  ngOnInit(): void {





  }

}
