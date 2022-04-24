import { ErrorHandler } from '@angular/core';



export class MyErrorHandler implements ErrorHandler {
  handleError(error : any) {
  console.log(error)
  // TODO: hier die Exception weiter behandeln
  }
  }
