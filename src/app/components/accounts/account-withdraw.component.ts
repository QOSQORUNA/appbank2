import { Component, OnInit } from '@angular/core';
import { AccountResponse } from '../shared/models/response/account.response';
import { DbService } from '../../services/db.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { TransacRequest } from '../shared/models/request/transac.request';

@Component({
  selector: 'app-account-withdraw',
  templateUrl: './account-withdraw.component.html',
  styleUrls: ['./account-withdraw.component.css']
})
export class AccountWithdrawComponent implements OnInit {

  existeMonto: boolean;
  numberAccount: string;
  // existeCuenta = true;
  usuarioId: number;
  // accountsArray = [];
  valorMonto: number;
  account: Array<AccountResponse>;
  exitOp = false;
  look: AccountResponse = new AccountResponse();
  deposito = new TransacRequest();
  constructor(private db: DbService,
              private activatedRoute: ActivatedRoute) {
                this.activatedRoute.parent.params.subscribe(parametros => {
                  this.numberAccount = parametros.number;
                  console.log(parametros.number);
                });
               }

  ngOnInit() {
    this.obtenerCuenta(this.numberAccount);
    this.validarMonto();
  }

  validarMonto() {
    if (+(this.look.amount) < 1) {
      return false;
    } else {
      return true;
    }
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
  retirarFondos(form: NgForm) {
    if (form.value.amount) {
      this.exitOp = true;
      this.valorMonto = form.value.amount;
      console.log(form.value);
    } else {
      console.log('no hay deposito');
    }
    
  }
  toWhitdraw(form: NgForm) {
    if (form.value.amount) {

      this.db.toWithDraw(form.value).subscribe(res => {
        console.log(res);
        
        this.exitOp = true;
        this.valorMonto = form.value.amount;
      });
    } else {
      console.log('no hay retiro');
    }
  }
}