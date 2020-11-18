import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DbService } from '../../services/db.service';
import { AccountResponse } from '../shared/models/response/account.response';

@Component({
  selector: 'app-account-datail',
  templateUrl: './account-datail.component.html',
  styleUrls: ['./account-datail.component.css']
})
export class AccountDatailComponent implements OnInit {
  existeCuenta = true;
  usuarioId: number;
  numberAccount: string;
  accountsArray = [];
  account: Array<AccountResponse>;
  look: AccountResponse = new AccountResponse();

  constructor(private activatedRoute: ActivatedRoute,
              private db: DbService) {

    // this.db.getAccount().subscribe( (data) => {
    //   this.accountsArray = data;
    // });

    this.activatedRoute.parent.params.subscribe(parametros => {
      this.numberAccount = parametros.number;
      console.log(parametros.number);
    });

    
   }

  ngOnInit() {
    this.obtenerCuenta(this.numberAccount);
  }
  obtenerCuenta(num: string) {
    if ( num) {
      this.db.getAccountByUser(num).subscribe( (data: any) => {
        this.account = data;
        const lookme = this.account.find((val: any ) => val = true);
        this.look = this.account.find((val: any ) => val = true);
        console.log( lookme.type);
      }, err => {
        this.existeCuenta = false;
        console.log(err);
      });
    }
  }


}
