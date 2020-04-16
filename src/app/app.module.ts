import { MaterialModule } from "./material/material.module";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProductsComponent } from "./products/products.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";
import { SignupComponent } from "./signup/signup.component";
import { LoginComponent } from "./login/login.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { ArchitectureComponent } from "./architecture/architecture.component";
import { DecorationComponent } from "./decoration/decoration.component";
import { IndustrialDesignComponent } from "./industrial-design/industrial-design.component";
import { GraphicComponent } from "./graphic/graphic.component";
import { PhotographyComponent } from "./photography/photography.component";
import { MusicComponent } from "./music/music.component";
import { WebDesignComponent } from "./web-design/web-design.component";

@NgModule({
    declarations: [
        AppComponent,
        ProductsComponent,
        WelcomeComponent,
        SignupComponent,
        LoginComponent,
        ContactUsComponent,
        ArchitectureComponent,
        DecorationComponent,
        IndustrialDesignComponent,
        GraphicComponent,
        PhotographyComponent,
        MusicComponent,
        WebDesignComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MaterialModule,
        FlexLayoutModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
