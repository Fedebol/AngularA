import { AppComponent } from './../../app.component';
import { ShoppingService } from './../../services/shopping.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Types/product.type';
import { Subscription, fromEvent } from 'rxjs';
import { miObservableDeString } from '../../ejemplos/ejemplo1';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit{

  shoppingList: Product [] = [];
  subscription: Subscription = new Subscription();

  constructor(private shoppingService: ShoppingService){}
  /**
   ** * next => Atributo obligatorio de cualquier observer.
   * es la funcionalidad que recibe del observable al emitir nuevos valores.
   ** * error => la funcionalidad opcional que gestiona
   * notificaciones de error que puede lanzar el observable
   ** * completed => funcionalidad opcional que gestiona la notificacion
   * de una ejecucion completada
   */
  ngOnInit(): void {

    //!evitar usar solo el netx del observer
    //this.subscription = this.shoppingService.getAllProducts().subscribe(
    //  (lista: Product[]) => {
    //   this.shoppingList = lista;
    //})

    //? Evitar no indicar los valores del observer de forma explicita
    //this.subscription = this.shoppingService.getAllProducts().subscribe(
    //  (list:Product[]) => {
    //    this.shoppingList = list;
    //  }),
    //  ((error: any) => console.error(`Ha ocurrido un error al obtener la lista: ${error}`))
    //  (() => console.info(`Obtencion de lista de productos completada`));

      // Opcion recomendada
      this.subscription = this.shoppingService.getAllProducts().subscribe(
        {
          next: (list:Product[]) => {
            this.shoppingList = list;
            console.table(`${this.shoppingList}`);
          },
          error: (error: any) => {console.error(`Ha ocurrido un error al obtener la lista: ${error}`)
          },
          complete: () => console.info(`Obtencion de lista de productos completada`)
        }
      )
    // ejemplo de recepcion de distintos valores
      this.subscription.add(this.shoppingService.getUserData().subscribe({
        next: (valor: string | number) => console.log(`- ${valor}`),
        error: (error: any) => console.error(`Error: ${error}`),
        complete: () => console.info(`¡Hemos terminado!`)
      }));


    // * Ejemplo de uso de un Observable personalizado

    miObservableDeString('Hola', 'Fede', 'to', 'bien?').subscribe({
      next: (valor: string) => console.log(`- ${valor}`),
      error: ((error) => console.error(`algo salio mal: ${error}`)),
      complete: () => console.info(`Fin de la emision de observable personalizado`)
    })


    //  Ejemplo de captura de Clicks en el documento a traves de un observable
    this.shoppingService.getClick().subscribe(
      {
        next: (valor: Event) => console.log(`Click: ${valor.target}`),
        error: ((error: any) => console.log(`Ha ocurrido un error: ${error}`)),
        complete: (() => console.info('Terminado observable escucha click'))
      }
    )






  }

  ngOnDestroy(): void{
    //desubscribimos cuando el componente desaparece
    this.subscription.unsubscribe();
  }
}




