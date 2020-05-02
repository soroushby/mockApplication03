import { Component, OnInit } from "@angular/core";
import { ProductsService } from 'src/app/products.service';

@Component({
    selector: "app-architecture",
    templateUrl: "./architecture.component.html",
    styleUrls: ["./architecture.component.scss"]
})
export class ArchitectureComponent implements OnInit {
    products=this.productservice.products$
    constructor(private productservice:ProductsService) {}
 
    ngOnInit() {
      
        console.log(this.products)
       
    }
}
