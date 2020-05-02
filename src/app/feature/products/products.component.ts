import { FormBuilder, FormGroup } from "@angular/forms";
import { ProductsService } from "../../products.service";
import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-products",
    templateUrl: "./products.component.html",
    styleUrls: ["./products.component.scss"]
})
export class ProductsComponent implements OnInit {
    constructor(private fb: FormBuilder,
       ) {}
        

    ngOnInit() {
       
    }
}
