import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashDispGraphTypeService {

  constructor() { }

  public gType: string;

  getGraphType(msg: string) {
    this.gType = msg;
  }

  returnGraphType(): string {
    return this.gType;
  }
}
