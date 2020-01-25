import { Component } from "@angular/core";
import { ProductService } from './product.service';
import { IProduct } from './Products';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
    providers: [ProductService]
})
export class ProductListComponent {
  showImage: boolean = false;
   pageTitle: string ='Product List';
   imageWidth: number = 600;
   imageMargin: number = 30;
   userName: string = "";
   products: IProduct[] = [];
   filteredProducts: IProduct[] = [];
   errorMessage: string;
  toggleImage(): void{
    this.showImage = !this.showImage;
  }

  constructor(private productservice: ProductService){}
  userLogin(): void{
    this.userName= this.userName + " not success";
  }
  onNotify(message:string) {
    alert(message);
   }
   ngOnInit() : void{
    this.productservice.getProducts().subscribe(
      data => {
        this.products = data
        this.filteredProducts = data;
      }, error => {
        this.errorMessage = error;
      }
    )
   }
}