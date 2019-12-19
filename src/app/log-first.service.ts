import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogFirstService {

  constructor() { }
  log = () => {
    console.log('fist service')
  }
}
