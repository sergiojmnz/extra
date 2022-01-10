import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'E=mc2';
  m: any;
  c: any = 299792458;
  resultado: number = 0;
  constructor(){ }
  formulamc2(){
    this.resultado = this.m * Math.pow(parseFloat(this.c),2);   
  }
}