import { Component, OnInit } from '@angular/core';
import {Person }  from '../person';


@Component({
  selector: 'bm-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  public person : Person ;

  constructor() {
    this.person = new Person();
    this.person.name = "Vincent Tene";

  }

  ngOnInit(): void {
  }

}
