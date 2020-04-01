import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ProductsService {
  veganChocolate: any;
  constructor() {}
  getData() {
    return this.veganChocolate = [
      { name: "mint", price: "34", code: "135" },
      { name: "hazelnut", price: "10", code: "357" },
      { name: "peanut", price: "13", code: "945" },
      { name: "dark", price: "14", code: "385" }
    ];
  }
}
