import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { MobileNumberComponent } from './component/mobile-number/mobile-number.component';
import { EnterOtpComponent } from './component/enter-otp/enter-otp.component';
import { EnterPinComponent } from './component/enter-pin/enter-pin.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    MobileNumberComponent,
    EnterOtpComponent,
    EnterPinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
