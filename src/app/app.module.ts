import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { EzoTaskComponent } from './Compoment/ezo-task/ezo-task.component';
import { EzoTaskATMManagmentComponent } from './Compoment/ezo-task-atm-managment/ezo-task-atm-managment.component';
@NgModule({
  declarations: [AppComponent, EzoTaskComponent, EzoTaskATMManagmentComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
