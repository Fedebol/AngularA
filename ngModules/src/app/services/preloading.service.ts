import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

//Creamos una clase de opciones de prepaga
//va a servir para definir las opciones que debe tener una ruta
//para precargar o no un modilo

export class PreloadingOptions{
  constructor(public routePath: string, public preload: boolean = true){}
}

/**
 * servicio personalizado, precarga o no un modulo de las diferentes
 * rutas en el modulo de enrutado y esten especificadas como carga perezosa
 *
 * a traves de un evento en el DOM (click, hover, long press...)
 * inicia o no un precargado de modulos.
 */


@Injectable({
  providedIn: 'root'
})
export class PreloadingService {
  // un subject es un tipo de observable que permite emitir valores
  // a quien este suscripto al mismo, a traves del metodo .next(nuevoValor)
  private _subject = new Subject<PreloadingOptions>();

  public options$ = this._subject.asObservable();

  constructor() { }

  /**
   * metodo encargado de iniciar una evaluacion de precarga
   * @param routePath Ruta que se desea precargar
   */

  comenzarPrecarga(routePath: string){
    const opcionesPrecarga: PreloadingOptions = new PreloadingOptions(routePath, true);

    this._subject.next(opcionesPrecarga);
  }
}
