import { of, Observable, fromEvent } from "rxjs";


// ****   Ejemplo 1   **** uso basico de un observable y un observer

//* Creacion de un observable
// creamos un observable que emite 2 valores: 'hola' y despues emitira 'Martin'
//const observable = of('Hola', 'Martin');

//* Creacion de Observador

//const observer = {
//  next: (valor: string | number) => console.log(`- ${valor}`),
//  error: (error: any) => console.error(`Error: ${error}`),
//  complete: () => console.info(`¡Hemos terminado!`)
//}

// * Ejecucion del observable => Imprescindible en una susbcripcion
//observable.subscribe(observer);


// ****   Ejemplo 2   **** funcion que devuelve un observable personalizado

export const miObservableDeString = (...args: string[]): Observable<string> => {
  return new Observable((observer) => {
    if(args.length > 10 ){
      observer.error('Tiene demasiados elementos')
    }
    // para cada uno de los elementos recibidos por parametros
    args.forEach((arg: string) => observer.next(arg)); // emitimos todos los valores que recibimos
    observer.complete(); // completamos el observer
  });
}

//miObservableDeString('Hola', 'Fede', 'to', 'bien?');

// **** Ejemplo 3 **** Emision de valores a partir de evento en el DOM

    // 1. Creacio de observable
   // const observableClicks = fromEvent(document, 'click');

    // 2. Creacio de observer del observable
   // observableClicks.subscribe({
   //   next: (valor: Event) => console.log(`Ha ocurrido un evento: ${valor.type}`),
   //   error: ((error: any) => console.log(`Ha ocurrido un error: ${error}`)),
   //   complete: (() => console.info('Terminado observable escucha click'))
   // })

