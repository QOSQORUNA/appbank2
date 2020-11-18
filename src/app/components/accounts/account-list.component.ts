import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbService } from '../../services/db.service';
import { AccountResponse } from '../shared/models/response/account.response';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  listAmount: number[];
  mensajeLogin = false;
  resultado: Array<AccountResponse>;
  constructor(private db: DbService,
              private router: Router) { }

  ngOnInit() {
    this.obtenerCuentas();
  }

  
  obtenerCuentas() {
    this.db.getAccount().subscribe(data => {
      this.resultado = data;
    },
    err => {
      this.mensajeLogin = true;
      console.log(err);
    }
    );
  }
 
  goAccount(numberAccount: string) {
    this.db.getTokenJhil(numberAccount).subscribe();
    this.router.navigate( ['/accounts', numberAccount]);
  }
  // pasarValor() {
  //   for (var i = 0; i < this.resultado.length; i++) {
  //     this.listAmount.push(this.resultado[i]);
  //  }
  //  return this.listAmount
  // }
  toEvaluate(amount: number) {
   // console.log(amount);
    if ( amount <= 0) {
      // console.log(amount);
      return true;
    } else {
      return false;
    }
  }
}
