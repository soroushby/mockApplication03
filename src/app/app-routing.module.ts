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
    { path: "", component: WelcomeComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
