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
    
    //let numberArray = numbers.split(',').map(Number);
    const numberArray = numbers.replace(/\n/g, ",").split(",");
    let sum = numberArray.reduce((sum, num) => sum + parseInt(num, 10),0);

    return sum;
  }
}
