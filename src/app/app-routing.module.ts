import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { routingComponents, appRouting } from './app.routing';

@NgModule({
  imports: [appRouting],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
