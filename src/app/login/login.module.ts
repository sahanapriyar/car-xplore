import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  imports: [
    CommonModule,MatInputModule,FormsModule,MatCardModule,MatButtonModule  ],
  declarations: [LoginComponent],
  exports:[LoginComponent]
})
export class LoginModule { }
