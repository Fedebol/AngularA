import { NetworkAwarePreloadStrategy } from './preloading-Strategies/network-aware-preloading-strategy';
import { OptInPreloadingStrategy } from './preloading-Strategies/opt-in-preloading-startegi';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { OnDemandPreloadingStrategy } from './preloading-Strategies/on-demand-preloading-strategy';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,


  ],
  providers: [
    // Disponemos las estrategias de precarga
    OptInPreloadingStrategy,
    NetworkAwarePreloadStrategy,
    OnDemandPreloadingStrategy
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
