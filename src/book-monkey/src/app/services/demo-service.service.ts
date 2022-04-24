import { Injectable } from '@angular/core';
import { IDemoService } from './idemo-service';



@Injectable({
  providedIn: 'root'
})
export class DemoServiceService implements IDemoService {

  constructor() { }

  display():void {

    console.log("Display method is been called!");

  }
}
