import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringCalculatorService {
  numbers = 1;
  constructor() { }

  add(numbers: string): number {
    if (!numbers) {
      return 0; // Empty input should return 0
    }
    
    let numberArray = numbers.split(',').map(Number);
    let sum = numberArray.reduce((sum, num) => sum + num, 0);

    return sum;
  }
}
