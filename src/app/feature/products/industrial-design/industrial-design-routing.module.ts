import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { IndustrialDesignComponent } from "./industrial-design.component";

const routes: Routes = [{ path: "", component: IndustrialDesignComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class IndustrialDesignRoutingModule {}
