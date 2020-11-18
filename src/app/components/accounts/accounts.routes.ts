import { Routes } from '@angular/router';

import { AccountWithdrawComponent } from './account-withdraw.component';
import { AccountDepositComponent } from './account-deposit.component';
import { AccountDatailComponent } from './account-datail.component';



export const ACCOUNTS_ROUTES: Routes = [
    {path: 'detalle', component: AccountDatailComponent},
    {path: 'retirar', component: AccountWithdrawComponent},
    {path: 'depositar', component: AccountDepositComponent},
    // {path: 'crear', component: AccountsCreateComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'detalle' }
];