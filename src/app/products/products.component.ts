import { FormBuilder, FormGroup } from "@angular/forms";
import { ProductsService } from "./../products.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"]
})
export class ProductsComponent implements OnInit {
  veganChoclate: any;
  productForm: any;

  constructor(private ps: ProductsService, private fb: FormBuilder) {}

  ngOnInit() {
    this.veganChoclate = this.ps.getData();
    
    this.productForm = this.fb.group({
      productName: "",
      id: "",
      phoneNumber: "",
      email: ""
    });
  }
}
