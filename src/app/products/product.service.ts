import { Injectable } from "@angular/core";
import { IProduct } from "./Products";
import { Observable, throwError, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';



@Injectable({
    providedIn: 'root'
})


export class ProductService {
    
    private productUrl: string = 'https://f7vxewxmz9.execute-api.us-east-1.amazonaws.com/products/getproduct';

    constructor(private http: HttpClient) {}
    
    getProducts() : Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.productUrl).pipe(
        tap(data => console.log( JSON.stringify(data) )),
        catchError(this.handleError)
        );
    }
    
    getProduct(id: number): Observable<IProduct | undefined> {
        return this.getProducts().pipe(
         map(
            (products: IProduct[]) => products.find(p => p.productId === id)
         )
        );
    } 

private handleError(err: HttpErrorResponse){
    let errMessage = '';
    if(err.error instanceof ErrorEvent){
        errMessage = `An error occurred: ${err.error.message}`;
    } else {
        errMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }

    console.error(errMessage);
    return throwError(errMessage);
}
}