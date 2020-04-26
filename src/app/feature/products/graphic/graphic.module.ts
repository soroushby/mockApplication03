import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { GraphicRoutingModule } from "./graphic-routing.module";
import { GraphicComponent } from "./graphic.component";

@NgModule({
    declarations: [GraphicComponent],
    imports: [CommonModule, GraphicRoutingModule]
})
export class GraphicModule {}
