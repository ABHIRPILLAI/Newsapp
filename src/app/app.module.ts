import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadingComponent } from './topheading/topheading.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsapiservicesService } from "./service/newsapiservices.service";
import { SportsNewsComponent } from './sports-news/sports-news.component';
import { TechNewsComponent } from './tech-news/tech-news.component';
import { BusinessComponent } from './business/business.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    TopheadingComponent,
    SportsNewsComponent,
    TechNewsComponent,
    BusinessComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [NewsapiservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
