import { Component, OnInit } from '@angular/core';
import {Person }  from '../person';
import { IDemoService, MY_TOKEN } from '../services/idemo-service';
import { Inject } from '@angular/core';


@Component({
  selector: 'bm-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  public person : Person ;

  constructor(private demoService: IDemoService, @Inject(MY_TOKEN) token: string ) {
    this.person = new Person();
    this.person.name = "Vincent Tene";

    demoService.display()

    console.log(token);
  }

  ngOnInit(): void {
  }

}
