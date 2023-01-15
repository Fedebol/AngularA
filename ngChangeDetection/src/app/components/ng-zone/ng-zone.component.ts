import { Component, OnInit, NgZone } from '@angular/core';



@Component({
  selector: 'app-ng-zone',
  templateUrl: './ng-zone.component.html',
  styleUrls: ['./ng-zone.component.css']
})
export class NgZoneComponent implements OnInit{

  progreso: number = 0;
  texto: string = '';

  constructor(private _ngZone: NgZone){}
  ngOnInit(): void {

  }

  incrementarProgreso(terminar : () => void){

    this.progreso += 1;
    console.log(`Progreso actual: ${this.progreso}%`);
    if(this.progreso < 100){
      window.setTimeout(() => {
        this.incrementarProgreso(terminar);

      },10)
    }else{
      terminar();
    }
  }

  aumentarDentroNgZone(){
    this.texto = 'DENTRO';
    this.progreso = 0;
    this.incrementarProgreso(() =>
    console.log(`${this.texto} de angular zone: Incremento terminado`))
  }

  aumentarFueraNgZone(){
    this.texto = 'FUERA';
    this.progreso = 0;
    this._ngZone.runOutsideAngular(() => {
      this.incrementarProgreso(() => {
        this._ngZone.run(() =>
        console.log(`${this.texto} de angular zone: Incremento terminado`)
        );
      });
    });

  }

}
