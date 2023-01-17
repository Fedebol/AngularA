import { Injectable } from '@angular/core';
import { PreloadingOptions } from './../services/preloading.service';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of, EMPTY, mergeMap } from 'rxjs';
import {  PreloadingService } from './../services/preloading.service';

@Injectable({
  providedIn: 'root'
})
export class OnDemandPreloadingStrategy implements PreloadingStrategy {

  private _preloadDemandOptions$: Observable<PreloadingOptions>
  //Inicializamos las opciones desde el observable del servicio
  constructor(private _preloadingService: PreloadingService){
    this._preloadDemandOptions$ = this._preloadingService.options$;
  }

  private cargarSiNo(route: Route, preloadingOptions: PreloadingOptions): boolean{
    /**
     * Si:
     *  1. La ruta tiene una propiedad llamada "data".
     *  2. La ruta tiene dentro de "data" una clave llamada "preload" a true.
     *  3. La ruta esta incluida en una lista de rutas que queremos precargar.
     *  4. Las operaciones tienen "preload" a true.
     */

    return (
      route.data &&
      route.data['preload'] &&
      [route.path, '*'].includes(preloadingOptions.routePath) &&
      preloadingOptions.preload // true
    )
  }
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    //estamos escuchando a los valores de opciones emitidos por el next() del servicio
    return this._preloadDemandOptions$.pipe(
      //iteramos por cada valor recibido desde el servicio con el next()
      mergeMap((preloadingOptions: PreloadingOptions) =>{
        // Comprobamos si se debe cargar o no estas opciones
        const precargar: boolean = this.cargarSiNo(route, preloadingOptions);
        console.log(`${precargar ? '' : 'NO'} se precarga el modulo de la ruta ${route.path}`);
        // Devolvemos la ejecucion del callback load() o nada
        return precargar ? load() : EMPTY
      })
    );

  }
}

