import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthorsComponent} from './authors/authors.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
 { path: 'login', component: LoginComponent },
 // { path: 'register', component: RegisterComponent },
  {path:'authors',component:AuthorsComponent},
  {path:'dashboard',component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
