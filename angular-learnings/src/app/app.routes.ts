import { Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { RegistrationFromComponent } from './registration-from/registration-from.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: RegistrationFromComponent,
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'table',
    component: TableComponent,
  },
];
