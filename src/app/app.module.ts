import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Layout/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularPhoneNumberInput } from 'angular-phone-number-input';
import { HttpClientModule } from '@angular/common/http';
import { PopUpCookiesComponent } from './components/pop-up-cookies/pop-up-cookies.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PopUpCookiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularPhoneNumberInput,
    HttpClientModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
