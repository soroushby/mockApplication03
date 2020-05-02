import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProductsRoutingModule } from "./products-routing.module";
import { ProductsComponent } from "./products.component";
import { MaterialModule } from "src/app/material/material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [ProductsComponent],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        MaterialModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        HttpClientModule
    ]
})
export class ProductsModule {}
