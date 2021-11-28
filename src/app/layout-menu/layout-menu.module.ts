import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    LayoutComponent
  ],exports:[
    LayoutComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatMenuModule,
    AppRoutingModule
  ]
})
export class LayoutMenuModule { }
