import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeDashServiceService {

  public message: string;
  constructor() { }

  getHomeDashName(msg: string) { 
    // accepts msg from src
    console.log("Got " + msg);
    this.message = msg;
  }

  // injected to app.module

  returnHomeDashName() {
    console.log("Returning " + this.message);
    return this.message;
  }
}
