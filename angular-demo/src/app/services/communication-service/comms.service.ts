import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommsService {
  private functionCall: {[name: string]:() => void} = {};
  
  constructor() { }

  registerCall(name: string, fn: () => void) {
    this.functionCall[name]= fn;
  }

  callFunction(name: string) {
    if (this.functionCall.hasOwnProperty(name)) {
      this.functionCall[name]();
    }
  }
}
