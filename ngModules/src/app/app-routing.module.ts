import { OnDemandPreloadingStrategy } from './preloading-Strategies/on-demand-preloading-strategy';
import { NetworkAwarePreloadStrategy } from './preloading-Strategies/network-aware-preloading-strategy';
import { OptInPreloadingStrategy } from './preloading-Strategies/opt-in-preloading-startegi';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, PreloadingStrategy } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/pages/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./modules/pages/profile/profile.module').then(m => m.ProfileModule),
    data:{
      preload: true //esto querra decir que este modulo se va a precargar
    }
  },
  {
    path:'**',
    loadChildren: () => import('./modules/pages/notfound/notfound.module').then(m => m.NotfoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // solo se puede tener una estrategia
    // 1. Precarga todos los modulos de las rutas --> Evita carga perezosa
    //preloadingStrategy: PreloadAllModules

    // 2. No precarga ningun modulo --> fuerza carga perezosa
    // preloadingStrategy: Nopreloading

    // 3. Estrategia personal de cargado por opciones en ruta
    //preloadingStrategy: OptInPreloadingStrategy

    // 4. Estrategia Personalizada: Precarga segun conexion de usuario a internet
    //preloadingStrategy: NetworkAwarePreloadStrategy

    // 5. Estrategia Personalizada: Precargado por demanda evento controlado desde servicio preloadingservice
    preloadingStrategy: OnDemandPreloadingStrategy
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
