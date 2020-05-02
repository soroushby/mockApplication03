import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})
export class ProductsService {
    constructor(private http: HttpClient) {}

    products$: any = this.http.get("https://jsonplaceholder.typicode.com/posts");
}
