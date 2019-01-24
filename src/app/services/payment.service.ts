import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { Injectable } from "@angular/core";

@Injectable()
export class PaymentService{

    constructor(
        private http: Http, 
        private router: Router
    ){

    }

    getAllPayments(){
        return this.http.get('https://clzmate.herokuapp.com/payment/');
    }

}