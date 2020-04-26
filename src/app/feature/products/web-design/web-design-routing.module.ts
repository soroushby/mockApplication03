import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebDesignComponent } from './web-design.component';

const routes: Routes = [{ path: '', component: WebDesignComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebDesignRoutingModule { }
