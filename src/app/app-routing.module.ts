import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { SignupComponent } from "./signup/signup.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductsComponent } from "./products/products.component";
import { WelcomeComponent } from "./welcome/welcome.component";

const routes: Routes = [
    {
        path: "products",
        component: ProductsComponent 
        // loadChildren: 
    },
    { path: "welcome", component: WelcomeComponent },
    { path: "", component: WelcomeComponent },
    { path: "**", component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
