import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ViewModule} from './view/view.module';
import { ConvertToSpacePipe } from './shared/convert-to-spacespipe';
import { RelatedProductsModule} from './related-products/related-products.module';
import { StarComponent } from './shared/star.component';
import { reverseStringPipe } from './shared/reverse-stringpipe';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { ProductDetailGuard } from './products/product-detail.guard';
import { ProductModule } from './products/product.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule, 
    ViewModule, 
    RelatedProductsModule,
    HttpClientModule, 
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent},
      { path: 'products/:id', canActivate: [ProductDetailGuard], component: ProductDetailComponent},
      { path: 'welcome', component: WelcomeComponent},
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ], { useHash: true }), ProductModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
