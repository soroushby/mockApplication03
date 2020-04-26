import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DecorationRoutingModule } from "./decoration-routing.module";
import { DecorationComponent } from "./decoration.component";
import { MaterialModule } from "src/app/material/material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [DecorationComponent],
    imports: [CommonModule, DecorationRoutingModule, ReactiveFormsModule, FlexLayoutModule, MaterialModule]
})
export class DecorationModule {}
