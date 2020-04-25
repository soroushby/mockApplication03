import { ProductsModule } from "./featureModules/products/products.module";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { SignupComponent } from "./signup/signup.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductsComponent } from "./feature/products/products.component";
import { WelcomeComponent } from "./welcome/welcome.component";

const routes: Routes = [
    { path: "welcome", component: WelcomeComponent },

    {
        path: "products",
        loadChildren: () => import("./feature/products/products.module").then(m => m.ProductsModule)
    },
    { path: "", component: WelcomeComponent },
    { path: "**", component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
