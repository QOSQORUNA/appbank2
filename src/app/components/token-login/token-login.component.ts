import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserTokenRequest } from '../shared/models/request/user-token.request';
import { DbService } from '../../services/db.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-token-login',
  templateUrl: './token-login.component.html',
  styleUrls: ['./token-login.component.css']
})
export class TokenLoginComponent implements OnInit {
  userToken = new UserTokenRequest();
  constructor(private db: DbService,
              private router: Router) { }
  
  token: string;
  ngOnInit() {
  }

  toSend(form: NgForm) {
    this.db.loginToken(form.value).subscribe(res => {
      // this.showAlert = true;
      // res.valueOf();
      // form.reset();
      console.log(res);
      // this.token = res;
      this.router.navigateByUrl( '/usuarios');
    });
    
    console.log(form.value);
    // console.log(this.token);
    
  }
}
