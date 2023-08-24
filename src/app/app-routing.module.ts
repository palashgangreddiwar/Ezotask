import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { EzoTaskComponent } from './Compoment/ezo-task/ezo-task.component';
import { EzoTaskATMManagmentComponent } from './Compoment/ezo-task-atm-managment/ezo-task-atm-managment.component';

const routes: Routes = [
  {
    path: '',
    component: EzoTaskComponent,
    //  canActivate: [AuthGuard]
  },
  // { path: 'register-guest', component: RegisterGuestComponent },
  // { path: 'login', component: UserLoginComponent },
  // { path: 'show-img', component: EzoTaskComponent },
  { path: 'ATM-Management', component: EzoTaskATMManagmentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
