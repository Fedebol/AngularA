import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '404'
  },
  {
    path: '404',
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotfoundRoutingModule { }
