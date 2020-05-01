import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { WelcomeComponent } from "./welcome/welcome.component";
import { ProfileComponent } from "./profile/profile.component";
import { ContactUsComponent } from './feature/contact-us/contact-us.component';

const routes: Routes = [
    { path: "welcome", component: WelcomeComponent },

    {
        path: "products",
        loadChildren: () => import("./feature/products/products.module").then(m => m.ProductsModule)
    },

    {
        path: "profile",
        component: ProfileComponent
    },

    {
        path:"contactus",
        component:ContactUsComponent
    },

    { path: "", component: WelcomeComponent },
    { path: "**", component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
