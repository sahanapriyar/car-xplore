import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { RouterModule,Routes } from '@angular/router'
import { CarGuard } from '../car.guard';
import { CardetailsComponent } from '../home/cardetails/cardetails.component';

const registerRoute={
  path:'register' , component:RegisterComponent
};

const loginRoute={
  path:'login' , component:LoginComponent
};

const homeRoute={
  path:'home' , component:HomeComponent,canActivate:[CarGuard],
  children:[
    {
      path :'carDetails', component:CardetailsComponent
    }
  ]
};

const defaultRoute={
  path:'**' , redirectTo:'login'
};

const routes : Routes = [registerRoute,loginRoute,homeRoute,defaultRoute]

@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  declarations: [ ],
  exports:[RouterModule]
})
export class CarroutingModule { }
