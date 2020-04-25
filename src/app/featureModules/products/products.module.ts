import { MaterialModule } from "./../../material/material.module";
import { ContactUsComponent } from "./../../contact-us/contact-us.component";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ArchitectureComponent } from "src/app/architecture/architecture.component";
import { DecorationComponent } from "src/app/decoration/decoration.component";
import { IndustrialDesignComponent } from "src/app/industrial-design/industrial-design.component";
import { GraphicComponent } from "src/app/graphic/graphic.component";
import { PhotographyComponent } from "src/app/photography/photography.component";
import { MusicComponent } from "src/app/music/music.component";
import { WebDesignComponent } from "src/app/web-design/web-design.component";
import { ReactiveFormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ProductsComponent } from 'src/app/products/products.component';

@NgModule({
    declarations: [
        ContactUsComponent,
        ArchitectureComponent,
        DecorationComponent,
        IndustrialDesignComponent,
        GraphicComponent,
        PhotographyComponent,
        MusicComponent,
        WebDesignComponent,
        ProductsComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {path: "products", component: ProductsComponent},
            { path: "contactus", component: ContactUsComponent },
            { path: "architecture", component: ArchitectureComponent },
            { path: "decoration", component: DecorationComponent },
            { path: "industrial", component: IndustrialDesignComponent },
            { path: "graphic", component: GraphicComponent },
            { path: "photography", component: PhotographyComponent },
            { path: "music", component: MusicComponent },
            { path: "webDesign", component: WebDesignComponent }
        ]),
        MaterialModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        BrowserAnimationsModule
    ]
})
export class ProductsModule {}
