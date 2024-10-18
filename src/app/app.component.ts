import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { StringCalculatorService } from './service/string-calculator.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'string-calculator';
  resultArray:number[]=[];
  result: any;
  keyValueArray: { key: string, value: any }[] = [];
  constructor(private stringCalculatorService: StringCalculatorService) {
    
   }
  ngOnInit(): void {
    //this.stringCalc();
    this.stringCalc("");
    this.stringCalc("1");
    this.stringCalc("1,2");
    this.stringCalc("1,2,3,4,5");
    this.stringCalc("1\n2,3");
    this.stringCalc("//;\n1;2"); 
    this.stringCalc("1,-2"); 
    this.stringCalc("1,-2,-3"); 
    this.stringCalc("2,1001");
    this.stringCalc("//[***]\n1***2***3") 
    this.stringCalc("//[*][%]\n1*2%3") 
    this.stringCalc("//[***][%%][;;]\n1***2%%3;;4") 
  }
  stringCalc(input: string){
    
      try {
        this.result = this.stringCalculatorService.add(input);
        this.keyValueArray.push({ key: input, value: this.result });
      } catch (error: any) {
        // Handle the error by setting the result to the error message
        this.result = error.message;

        // Push the input and error message as key-value pair into the array
        this.keyValueArray.push({ key: input, value: this.result });
      }
  }
}
