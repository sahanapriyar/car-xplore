import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeService } from './home.service';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { CardetailsComponent } from './cardetails/cardetails.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CarroutingModule } from '../carrouting/carrouting.module';


@NgModule({
  imports: [
    CommonModule,HttpClientModule,MatToolbarModule,MatCardModule,MatSidenavModule,CarroutingModule
  ],
  declarations: [HomeComponent, CardetailsComponent],
  providers : [HomeService],
  exports :[HomeComponent]
})
export class HomeModule { }
