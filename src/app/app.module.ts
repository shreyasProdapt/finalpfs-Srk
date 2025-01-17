import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HomeComponent } from './app/home/home.component';
import { LoginComponent } from './app/login/login.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { RechargeComponent } from './app/recharge/recharge.component';
import { ViewplanComponent } from './app/viewplan/viewplan.component';
import { SignupComponent } from './app/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RechargeComponent,
    ViewplanComponent,
    SignupComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule,
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
