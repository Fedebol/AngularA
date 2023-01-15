import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngChangeDetection';
  // variable para el ejemplo REATTACH
  live: boolean = true;

  // valores para el ejemplo de async pipe

  items = [{}];
  items$ = new BehaviorSubject(this.items);

  addItem(){
    const nuevoItem = Math.floor(Math.random() * 100) +1;

    this.items.push(
      {
        numero: nuevoItem
      }
    );

    this.items$.next(this.items);
  }
}
