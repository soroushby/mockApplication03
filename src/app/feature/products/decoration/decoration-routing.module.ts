import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DecorationComponent } from './decoration.component';

const routes: Routes = [{ path: '', component: DecorationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DecorationRoutingModule { }
