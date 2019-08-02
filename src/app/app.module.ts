import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HowUseComponent } from './how-use/how-use.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    HowUseComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot([
      { 
        path: '',
        component: HomeComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path:'how-use',
        component: HowUseComponent
      },
      {
        path: 'list',
        component: ListComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
    ]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
