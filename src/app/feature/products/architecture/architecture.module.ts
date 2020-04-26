import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ArchitectureRoutingModule } from "./architecture-routing.module";
import { ArchitectureComponent } from "./architecture.component";

@NgModule({
    declarations: [ArchitectureComponent],
    imports: [CommonModule, ArchitectureRoutingModule]
})
export class ArchitectureModule {}
