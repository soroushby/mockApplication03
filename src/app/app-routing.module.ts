import { WebDesignComponent } from './web-design/web-design.component';
import { MusicComponent } from './music/music.component';
import { PhotographyComponent } from './photography/photography.component';
import { GraphicComponent } from './graphic/graphic.component';
import { IndustrialDesignComponent } from './industrial-design/industrial-design.component';
import { DecorationComponent } from './decoration/decoration.component';
import { ArchitectureComponent } from './architecture/architecture.component';
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { SignupComponent } from "./signup/signup.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductsComponent } from "./products/products.component";
import { WelcomeComponent } from "./welcome/welcome.component";

const routes: Routes = [
    { path: "products", component: ProductsComponent },
    { path: "signup", component: SignupComponent },
    { path: "welcome", component: WelcomeComponent },
    { path: "contactus", component: ContactUsComponent },
    { path: "architecture", component: ArchitectureComponent},
    { path: "decoration", component: DecorationComponent},
    { path: "industrial", component: IndustrialDesignComponent},
    { path: "graphic", component: GraphicComponent},
    { path: "photography", component: PhotographyComponent},
    { path: "music", component: MusicComponent},
    { path: "webDesign", component: WebDesignComponent},
    { path: "", component: WelcomeComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
