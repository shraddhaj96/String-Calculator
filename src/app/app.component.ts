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

  constructor(private stringCalculatorService: StringCalculatorService) {
    
   }
  ngOnInit(): void {
    this.stringCalc();
  }
  stringCalc(){
       console.log("function call");
       console.log(this.stringCalculatorService.add(""))
  }
}
