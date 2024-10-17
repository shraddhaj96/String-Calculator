import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringCalculatorService {
  numbers = 1;
  constructor() { }

  add(numbers: string) {
    if (!numbers) {
      return 0; // Empty input should return 0
    }
    return
    
  }
}
