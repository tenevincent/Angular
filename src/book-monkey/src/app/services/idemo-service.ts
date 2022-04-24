import { Injectable } from '@angular/core';
import { InjectionToken } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export abstract class IDemoService {


    abstract display(): void;

}


export const MY_TOKEN = new InjectionToken<string>('myConfig');
