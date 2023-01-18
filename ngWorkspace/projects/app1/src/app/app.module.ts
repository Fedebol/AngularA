import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavComponent } from './components/nav/nav.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';

//Listamos Providers de manera compartida
const providers: [] = [];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavComponent,
    SettingsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers, //providers: providers
  bootstrap: [AppComponent]
})
export class AppModule { }

/**
 * Se crea un modulo que se usara en AppRoutingModule de App0
 * se comparte este modulo de manera controlada con otras aplicaciones que lo necesiten
 */
@NgModule({})
export class App1SharedModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: AppModule,
      providers
    }
  }
}
