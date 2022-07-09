import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,FormsModule,MatFormFieldModule,MatCardModule,MatInputModule,
    MatCheckboxModule,MatButtonModule
  ],
  declarations: [RegisterComponent]
})
export class RegisterModule { }
