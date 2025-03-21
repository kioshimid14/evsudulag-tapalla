import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutesModule } from './login-routes.module';
import { LoginMaterialModule } from './login-material.module';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailComponent } from './pages/detail/detail.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';



@NgModule({
  declarations: [LoginComponent,DetailComponent, DashboardComponent],
  imports: [
    CommonModule,
    LoginRoutesModule,
    LoginMaterialModule,
    ReactiveFormsModule
  ]
})
export class LoginUserModule { }
