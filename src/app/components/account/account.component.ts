import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountRequest } from '../shared/models/request/account.request';
import { DbService } from '../../services/db.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  account = new AccountRequest();
  showAlert = false;

  constructor(private db: DbService) { }

  ngOnInit() {
  }

  toCreate(form: NgForm) {
    this.db.toCreateAccount(form.value).subscribe(res => {
      this.showAlert = true;
      res.valueOf();
      form.reset();
    });
    console.log(form.value);
  }
}
