import { App2SharedModule } from './../../../app2/src/app/app.module';
import { App1SharedModule } from './../../../app1/src/app/app.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'app1/home'
  },
  {
    path: 'app1',
    loadChildren: () => import('../../../app1/src/app/app.module').then(m => m.App1SharedModule)
  },
  {
    path: 'app2',
    loadChildren: () => import('../../../app2/src/app/app.module').then(m => m.App2SharedModule)
  },
  {
    path: '**',
    redirectTo: 'app1/home'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    // se importan los modulos para poder cargar y hacer uso de sus rutas desde App0
    App1SharedModule.forRoot(),
    App2SharedModule.forRoot()
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
