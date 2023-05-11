import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { WrapperBodyImgComponent } from './wrapper-body-img/wrapper-body-img.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PlansComponent } from './plans/plans.component';
import { ContactComponent } from './contact/contact.component';
import { PlanPricingGridComponent } from './plan-pricing-grid/plan-pricing-grid.component';
import { PreWeddingComponent } from './pre-wedding/pre-wedding.component';
import { WeddingComponent } from './wedding/wedding.component';
import { ModelShootComponent } from './model-shoot/model-shoot.component';
import { RiceceremonyComponent } from './riceceremony/riceceremony.component';
import { BabyShowerComponent } from './baby-shower/baby-shower.component';
const appRoute:Routes=[
  {path:'',component:HomeComponent},
  {path:'Home',component:HomeComponent},
  {path:'About',component:AboutComponent},
  {path:'Plans',component:PlansComponent},
  {path:'Contact',component:ContactComponent},
  {path:'preWedding',component:PreWeddingComponent},
  {path:'wedding',component:WeddingComponent},
  {path:'babyShower',component:BabyShowerComponent},
  {path:'riceCeremony',component:RiceceremonyComponent},
  {path:'modelShoot',component:ModelShootComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    WrapperBodyImgComponent,
    AboutComponent,
    HomeComponent,
    PlansComponent,
    ContactComponent,
    PlanPricingGridComponent,
    PreWeddingComponent,
    WeddingComponent,
    ModelShootComponent,
    RiceceremonyComponent,
    BabyShowerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
