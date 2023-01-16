import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotfoundRoutingModule } from './notfound-routing.module';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';


@NgModule({
  declarations: [
    NotFoundPageComponent
  ],
  imports: [
    CommonModule,
    NotfoundRoutingModule
  ]
})
export class NotfoundModule { }
