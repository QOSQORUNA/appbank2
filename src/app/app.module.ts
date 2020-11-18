import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { UsuariosCreateComponent } from './components/usuarios/usuarios-create.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { AccountsCreateComponent } from './components/accounts/accounts-create.component';
import { AccountDepositComponent } from './components/accounts/account-deposit.component';
import { AccountWithdrawComponent } from './components/accounts/account-withdraw.component';
import { AccountDatailComponent } from './components/accounts/account-datail.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountListComponent } from './components/accounts/account-list.component';
import { AccountComponent } from './components/account/account.component';
import { TokenRegisterComponent } from './components/token-register/token-register.component';
import { TokenLoginComponent } from './components/token-login/token-login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UsuariosComponent,
    UsuariosCreateComponent,
    AccountsComponent,
    AccountsCreateComponent,
    AccountDepositComponent,
    AccountWithdrawComponent,
    AccountDatailComponent,
    AccountListComponent,
    AccountComponent,
    TokenRegisterComponent,
    TokenLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
