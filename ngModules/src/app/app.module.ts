import { AuthFromsModule } from './modules/auth-forms/auth-forms.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Auth Forms Module para usar los componentes login y register forms
    AuthFromsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
