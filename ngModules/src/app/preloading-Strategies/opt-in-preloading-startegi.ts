import { PreloadingStrategy, Route } from '@angular/router';
import { EMPTY, Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class OptInPreloadingStrategy implements PreloadingStrategy {

  /**
   *
   * @param route la ruta recibida que deberia cargar un modulo
   * @param load el callback que carga el modulo
   * @returns ejecuta el callback de carga del modulo o devuelve un observable vacio
   */
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    // Evaluacion que determina:
    // 1. si dentro de la ruta hay un valor llamado "data"
    // 2. si dentro del valor "data" hay clave llamada "preload" a "true"
    // entonces, ejecuta el callback y carga el modulo
    // si no lo tiene, devuelve un observable nulo para que no se precargue el modulo

    return route.data && route.data['preload'] ? load() : EMPTY;
  }
}

