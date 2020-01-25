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
   }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.product = {
        "productId": id,
        "productName": "Leaf Rake",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2016",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 3.2,
        "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
      };
  }

}
