import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from './Products';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  imageWidth: number = 600;
  imageMargin: number = 135;
  pageTitle: string = 'Product Detail';
  products: IProduct[] = [];
  product: IProduct;
  constructor(private route: ActivatedRoute) {
    console.log(this.route.snapshot.paramMap.get('id'))
    console.log(this.route.snapshot.paramMap.get('name'))
   }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    let name = this.route.snapshot.paramMap.get('name');
    let code = this.route.snapshot.paramMap.get('code');
    let dcp = this.route.snapshot.paramMap.get('dcp');
    let date = this.route.snapshot.paramMap.get('date');
    let price = +this.route.snapshot.paramMap.get('price');
    let rate = +this.route.snapshot.paramMap.get('rate');

    this.product = {
        "productId": id,
        "productName": name,
        "productCode": code,
        "releaseDate": date,
        "description": dcp,
        "price": price,
        "starRating": rate,
        "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
      };
  }

}
