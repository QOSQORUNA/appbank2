import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { ACCOUNTS_ROUTES } from './components/accounts/accounts.routes';
import { UsuariosCreateComponent } from './components/usuarios/usuarios-create.component';
import { AccountsCreateComponent } from './components/accounts/accounts-create.component';
import { AccountListComponent } from './components/accounts/account-list.component';
import { AccountComponent } from './components/account/account.component';
import { TokenRegisterComponent } from './components/token-register/token-register.component';
import { TokenLoginComponent } from './components/token-login/token-login.component';


const routes: Routes = [
  { path: 'login', component: TokenLoginComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'tokenregister', component: TokenRegisterComponent },
  { path: 'accountslist', component: AccountListComponent },
  {
    path: 'accounts/:number',
    component: AccountsComponent,
    children: ACCOUNTS_ROUTES
  },
 // {path: 'accounts/:id/crear', component: AccountsCreateComponent},
  { path: 'usuario/crear', component: UsuariosCreateComponent },
  { path: 'account/crear', component: AccountComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
