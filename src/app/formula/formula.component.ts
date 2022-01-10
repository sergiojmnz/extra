import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formula',
  templateUrl: './formula.component.html',
  styleUrls: ['./formula.component.css']
})
export class FormulaComponent implements OnInit {
  m: any;
  c: any = 299792458;
  resultado: number = 0;
  constructor() { }
  formulamc2(){
    this.resultado = parseFloat(this.m) * Math.pow(parseFloat(this.c),2) 
  }

  ngOnInit(): void {
  }

}
