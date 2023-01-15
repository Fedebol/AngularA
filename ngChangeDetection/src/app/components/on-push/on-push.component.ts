import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-on-push',
  templateUrl: './on-push.component.html',
  styleUrls: ['./on-push.component.css'],
  //changeDetection: ChangeDetectionStrategy.Default
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushComponent implements OnInit{


  /*
    valor que se va a incrementar cada segundo en archivo TS
    y que dependiendo de la estrategia de Change Detection sus cambios se
    van a poder ver en el HTML

  */

    segundos: number = 0;

  constructor(){}

  ngOnInit(): void {
    setInterval(()=>{

    // incremenramos el valor de segundos
    this.segundos ++;
    // mostramos el valor por consola
    console.log(`Segundos Transcurridos: ${this.segundos} segundos`);
  }, 1000)

  }
}
