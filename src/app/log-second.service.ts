import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class LogSecondService {
  constructor() {}
  log = () => {
    console.log('second service')
  }
}
