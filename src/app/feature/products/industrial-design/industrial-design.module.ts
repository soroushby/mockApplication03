import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { IndustrialDesignRoutingModule } from "./industrial-design-routing.module";
import { IndustrialDesignComponent } from "./industrial-design.component";

@NgModule({
    declarations: [IndustrialDesignComponent],
    imports: [CommonModule, IndustrialDesignRoutingModule]
})
export class IndustrialDesignModule {}
