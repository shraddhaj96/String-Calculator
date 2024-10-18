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

      // Handle multiple delimiters wrapped in brackets like [*][%]
      const delimiterMatches = customDelimiter.match(/\[([^\]]+)\]/g);

      if (delimiterMatches) {
        // Create a combined regex from all delimiters found
        const delimiters = delimiterMatches.map(d => d.slice(1, -1)); // Remove the brackets []

        delimiter = new RegExp(delimiters.map(d => this.escapeRegExp(d)).join('|')); // Join them with | for regex OR
      } else {

        // Single character custom delimiter case (no brackets)
        delimiter = new RegExp(this.escapeRegExp(customDelimiter));
      }

      // Get the numbers string, which is after the first newline
      numbers = parts[1];
    }
    const numberArray = numbers.split(delimiter);
    
    //array to hold negative numbers
    const negatives: number[] = [];

    let sum = numberArray.reduce((sum, num) => {

      const n = parseInt(num, 10);

      if (isNaN(n)) {
        return sum; // Skip invalid numbers
      }

      if (n < 0) {
        negatives.push(n); // Collect negative numbers
      }

      // Ignore numbers greater than 1000
      if (n > 1000) {
        return sum;
      }

      return sum + n;
    },0);
   
   
  if (negatives.length > 0) {
    throw new Error(`Negative numbers not allowed: ${negatives.join(',')}`);
  }

  return sum; // Return the final sum
  }
  // Helper function to escape special characters in regex
  escapeRegExp(string: string): string {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // Escape regex special characters
  }
}
