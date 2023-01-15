import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo-struct',
  templateUrl: './ejemplo-struct.component.html',
  styleUrls: ['./ejemplo-struct.component.css']
})
export class EjemploStructComponent implements OnInit{

  rol: boolean = false;

  constructor(){}

  ngOnInit(): void {

  }
  cambiarRol(){
    this.rol = !this.rol;
  }

}
