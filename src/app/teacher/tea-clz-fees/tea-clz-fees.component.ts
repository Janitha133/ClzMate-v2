import { Component, OnInit } from '@angular/core';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-tea-clz-fees',
  templateUrl: './tea-clz-fees.component.html',
  styleUrls: ['./tea-clz-fees.component.scss'],
  providers: [PaymentService]
})
export class TeaClzFeesComponent implements OnInit {

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
