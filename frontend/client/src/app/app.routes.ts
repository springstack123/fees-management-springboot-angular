import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { LogComponent } from './log/log.component';
import { RegComponent } from './reg/reg.component';
import { PayComponent } from './pay/pay.component';
import { FeedComponent } from './feed/feed.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ViewRegisterComponent } from './view-register/view-register.component';
import { ViewFeedbackComponent } from './view-feedback/view-feedback.component';
import { ViewPaymentComponent } from './view-payment/view-payment.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { AboutComponent } from './about/about.component';
import { ThankyouComponent } from './thankyou/thankyou.component';

export const routes: Routes = [
{
  path: 'thankyou',
  component: ThankyouComponent
},
{'path':'',component:HomeComponent},
{'path':'news',component:NewsComponent},
{'path':'log',component:LogComponent},
{'path':'reg',component:RegComponent},
{'path':'pay',component:PayComponent},
{'path':'feed',component:FeedComponent},
{'path':'alog',component:AdminloginComponent},
{'path':'viewreg',component:ViewRegisterComponent},
{'path':'viewfeedback',component:ViewFeedbackComponent},
{'path':'viewpayment',component:ViewPaymentComponent},
{'path':'viewcontact',component:ViewContactComponent},
{'path':'about',component:AboutComponent},
{
  path: 'profile',
  loadComponent: () =>
    import('./profile/profile.component')
      .then(m => m.ProfileComponent)
}

];
   