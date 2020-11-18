import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountResponse } from '../shared/models/response/account.response';
import { DbService } from '../../services/db.service';
import { ActivatedRoute } from '@angular/router';
import { TransacRequest } from '../shared/models/request/transac.request';

@Component({
  selector: 'app-account-deposit',
  templateUrl: './account-deposit.component.html',
  styleUrls: ['./account-deposit.component.css']
})
export class AccountDepositComponent implements OnInit {

  // existeCuenta = true;
  numberAccount: string;
  look: AccountResponse = new AccountResponse();
  // accountsArray = [];
  valorMonto: string;
  exitDepo = false;
  account: Array<AccountResponse>;
  deposito = new TransacRequest();
  constructor(private db: DbService,
              private activatedRoute: ActivatedRoute) {
                this.activatedRoute.parent.params.subscribe(parametros => {
                  this.numberAccount = parametros.number;
                  console.log(parametros.number);
                });
                this.deposito.account_id = +this.look.number;
               }

  ngOnInit() {
    this.obtenerCuenta(this.numberAccount);
    // this.obtenerMonto(this.numberAccount);
  }

  obtenerCuenta(num: string) {
    if ( num  ) {
      this.db.getAccountByUser(num).subscribe( (data: any) => {
        this.account = data;
        this.look = this.account.find((val: any ) => val = true);
        console.log(data);
      }, err => {
        console.log(err);
      });
    }
  }
  // obtenerMonto(num: string) {
  //   this.db.getAmount(num).subscribe( data => {
  //    // this.valorMonto = data.valueOf();
  //     console.log(data);
  //   });
  // }
  depositar(form: NgForm) {
    if (form.value.amount) {
      this.exitDepo = true;
      this.valorMonto = form.value.amount;
      console.log(form.value);
    } else {
      console.log('no hay deposito');
    }
    
  }

  toDeposit(form: NgForm) {
    if (form.value.amount) {

      this.db.toDeposit(form.value).subscribe(res => {
        console.log(res);
        
        this.exitDepo = true;
        this.valorMonto = form.value.amount;
      });
    } else {
      console.log('no hay deposito');
    }

    console.log(form.value);
  }
}
