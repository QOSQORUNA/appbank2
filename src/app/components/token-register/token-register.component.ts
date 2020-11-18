import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserTokenRequest } from '../shared/models/request/user-token.request';
import { DbService } from '../../services/db.service';

@Component({
  selector: 'app-token-register',
  templateUrl: './token-register.component.html',
  styleUrls: ['./token-register.component.css']
})
export class TokenRegisterComponent implements OnInit {
  userToken = new UserTokenRequest();
  showAlert = false;

  constructor(private db: DbService) { }

  ngOnInit() {
  }
  toCreate(form: NgForm) {

    this.db.toCreateTokenUser(form.value).subscribe(res => {
      this.showAlert = true;
      res.valueOf();
      form.reset();
      console.log(res);
    });
    console.log(form.value);
  }

}
