import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ProductsComponent } from "./products.component";

const routes: Routes = [
    {
        path: "",
        component: ProductsComponent,
        children: [
            {
                path: "decoration",
                loadChildren: () => import("./decoration/decoration.module").then(m => m.DecorationModule)
            },

            {
                path: "architecture",
                loadChildren: () =>
                    import("../products/architecture/architecture.module").then(m => m.ArchitectureModule)
            },

            { path: "graphic", loadChildren: () => import("./graphic/graphic.module").then(m => m.GraphicModule) },

            {
                path: "photography",
                loadChildren: () => import("./photography/photography.module").then(m => m.PhotographyModule)
            },

            { path: "music", loadChildren: () => import("./music/music.module").then(m => m.MusicModule) },

            {
                path: "webDesign",
                loadChildren: () => import("./web-design/web-design.module").then(m => m.WebDesignModule)
            },

            {
                path: "industrial",
                loadChildren: () =>
                    import("./industrial-design/industrial-design.module").then(m => m.IndustrialDesignModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductsRoutingModule {}
