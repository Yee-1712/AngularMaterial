import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatDividerModule} from '@angular/material/divider';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatDividerModule
  ],
  exports:[
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatDividerModule
  ]
})
export class MaterialDesignModule { }
