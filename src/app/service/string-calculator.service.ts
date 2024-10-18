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
    let delimiter = /[\n,]/; // Default delimiters are comma and newline
    if (numbers.startsWith('//')) {

      const parts = numbers.split('\n'); // Split on newline

      // Extract the custom delimiter (everything after // up to the newline)
      const customDelimiter = parts[0].substring(2);

      // Create a RegExp for the custom delimiter
      delimiter = new RegExp(customDelimiter);

      // Get the numbers string, which is after the first newline
      numbers = parts[1];
    }
    const numberArray = numbers.split(delimiter);

    
    //let numberArray = numbers.split(',').map(Number);
    //const numberArray = numbers.replace(/\n/g, ",").split(",");
    let sum = numberArray.reduce((sum, num) => sum + parseInt(num, 10),0);

    return sum;
  }
}
