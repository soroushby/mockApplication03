import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DecorationRoutingModule } from './decoration-routing.module';
import { DecorationComponent } from './decoration.component';


@NgModule({
  declarations: [DecorationComponent],
  imports: [
    CommonModule,
    DecorationRoutingModule
  ]
})
export class DecorationModule { }
