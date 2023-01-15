import { Component, OnInit, Injectable, ChangeDetectorRef } from '@angular/core';
import * as Mock from 'mockjs';

@Injectable({
  providedIn: 'root'
})
export class DataListProvider{
/**
 * metodo que devuelve una lista de nombres aleatorios
 * @return { [] } lista de nombres aleatorios
 */
  get data(){
    const RandomName = Mock.Random;
    return[
        RandomName.first(),
        RandomName.first(),
        RandomName.first(),
        RandomName.first(),

      ];
  }
}

@Component({
  selector: 'app-detach',
  templateUrl: './detach.component.html',
  styleUrls: ['./detach.component.css']
})
export class DetachComponent implements OnInit{

  constructor(private _ref: ChangeDetectorRef, public dataListProvider: DataListProvider){}

  ngOnInit(): void {

    // * Desacoplamos el componente del HTML con el metodo DETACH
  this._ref.detach();

  /**
   * Cuando un componente esta desacoplado (TS y HTML),
   *  solo hay dos formas de decirle que
   * replique los cambios en el HTML:
   *
   *  1. detectChanges() --> Detecta los cambios en ese momento y actualiza HTML
   *  2. reattach() --> sirve para volver a aclopar el componente (TS y HTML)
   */

  setInterval(() => {

    this._ref.detectChanges();
  }, 3000);


}
}
