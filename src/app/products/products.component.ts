import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
veganChoclate:any;

  constructor(private ps: ProductsService) { }

  ngOnInit() {
    this.veganChoclate = this.ps.getData();
  }

}
