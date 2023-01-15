import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo-attr',
  templateUrl: './ejemplo-attr.component.html',
  styleUrls: ['./ejemplo-attr.component.css']
})
export class EjemploAttrComponent implements OnInit{

  color: string = '';
  constructor(){}

  ngOnInit(): void {

  }

}
