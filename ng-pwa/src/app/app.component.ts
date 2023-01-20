import { DataService } from './services/data.service';
import { Component, OnInit } from '@angular/core';

// imports necesarios para trabajar con service worker
import { SwUpdate, VersionEvent } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'ng-pwa';
  joke: string = '';

  constructor(private _swUpdate: SwUpdate, private _dataService: DataService){}

  ngOnInit(): void {
    //recarga la cache nada mas al iniciar el componente
    this.recargaCache();
  }
  /**
   * Metodo encargado de mostrar alerta al usuario si el
   * servicio worker detecta una nueva version disponible
   */
  recargaCache(){
    //comprobamos que el servicio esta activo y detecta cambios de produccion
    if(this._swUpdate.isEnabled){
      this._swUpdate.versionUpdates.subscribe(
        {
          next: (event: VersionEvent) => {
            // le decimos al service Worker que active la nueva version
            //cuando se detecta y emite el evento de una version de la aplicacion disponible
            //consultamos al usuario si desea la nueva version
            if(confirm('Nueva version, ¿desea actualizar?')){
              //si confirma actualizamos y limpiamos la cache para que
              this._swUpdate.activateUpdate()
                .then((value:boolean) => {
                    //el service worker detecte los nuevos cambios y los registre
                    window.location.reload()

                })
                .catch((error) => console.error(`algo paso... ${error}`))
                .finally(() => console.info('Nueva version'))
            }
          },
          error: (error) => {console.error(`algo paso... ${error}`)
          },
          complete: () => {
            console.info('Finalizada carga de nueva version')
          },
        }
      );
    }
  }

  obtenerNuevoChiste(){
    this._dataService.obtenerFrase().subscribe(
      {
        next: (respuesta: any) => this.joke = respuesta.value,
        error: (error) => console.error(`algo paso... ${error}`),
        complete: () => console.info('Finalizada carga de nuevo chiste'),
        
      }
    )
  }

}
