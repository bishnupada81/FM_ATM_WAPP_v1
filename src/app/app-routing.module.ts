import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { MobileNumberComponent } from './component/mobile-number/mobile-number.component';
import { EnterPinComponent } from './component/enter-pin/enter-pin.component';

const routes: Routes = [
  {path:'',                    component:LandingPageComponent},
  {path:'enter-mobile',        component:MobileNumberComponent},
  {path:'enter-pin',           component:EnterPinComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
