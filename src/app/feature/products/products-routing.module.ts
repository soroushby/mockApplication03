import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ProductsComponent } from "./products.component";

const routes: Routes = [
  { 
    path: "", 
    component: ProductsComponent,
    children: [
      {
        path: 'decoration',
        loadChildren: () => import('./decoration/decoration.module').then(m => m.DecorationModule)
      }
    ]
  },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductsRoutingModule {}
