import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';

// avoid typing issues for now
export declare var navigator: any;

@Injectable({ providedIn: 'root' })



export class NetworkAwarePreloadStrategy implements PreloadingStrategy {

/**
 *
 * @param route la ruta recibida que deberia cargar un modulo
 * @param load el callback que carga el modulo
 * @returns ejecuta el callback de carga del modulo o devuelve un observable vacio
 */
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    // Comprueba qu eel usuario tenga buena conexion
    // 1. si la funcion es true --> carga modulo
    // 2. si la funcion es false --> no carga el modulo
    return this.hasGoodConnection() ? load() : EMPTY;
  }

  hasGoodConnection(): boolean {
    // obtenemos la conexion del usuario
    const conn = navigator.connection;
    // Comprobamos si el usuario tiene habilitada la reserva de datos (movil)
    // en ese caso, no cargamos el modulo
    if (conn) {
      if (conn.saveData) {
        return false; // save data mode is enabled, so dont preload
      }
      // lista de conexiones no validas para precargar un modulo
      const avoidTheseConnections = ['slow-2g', '2g' /* , '3g', '4g' */];
      // Obtenemos el tipo de conexion que tiene el usuario
      const effectiveType = conn.effectiveType || '';
      //comprobamos si la conexion esta en la lista a evitar
      //en caso de ser asi, no precargamos el modulo
      if (avoidTheseConnections.includes(effectiveType)) {
        return false;
      }
    }
    // si la conexion es estable y buena, se precarga el modulo
    return true;
  }
}
