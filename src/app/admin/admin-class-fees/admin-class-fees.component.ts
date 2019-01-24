import { Component, OnInit } from '@angular/core';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-admin-class-fees',
  templateUrl: './admin-class-fees.component.html',
  styleUrls: ['./admin-class-fees.component.scss'],
  providers: [PaymentService]
})
export class AdminClassFeesComponent implements OnInit {

  payments: any[] = []

  constructor(
    private Payments: PaymentService
  ) { }

  ngOnInit() {
    this.getAllPayments()
  }

  getAllPayments(){
    this.Payments.getAllPayments()
      .subscribe(responce => {
        this.payments = responce.json().Payments
        console.log(this.payments);
      })
  }

}
