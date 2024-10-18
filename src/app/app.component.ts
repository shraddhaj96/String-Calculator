import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StringCalculatorService } from './service/string-calculator.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'string-calculator';
  resultArray:number[]=[];
  result: any;
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
  }
  stringCalc(input: string){
      try {
        this.result = this.stringCalculatorService.add(input);
      } catch (error: any) {
        // Handle the error by setting the result to the error message
        this.result = error.message;
      }
  }
}
