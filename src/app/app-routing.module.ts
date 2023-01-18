import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './business/business.component';
import { MainComponent } from './main/main.component';
import { SportsNewsComponent } from './sports-news/sports-news.component';
import { TechNewsComponent } from './tech-news/tech-news.component';
import { TopheadingComponent } from './topheading/topheading.component';

const routes: Routes = [
  {
    path:"",component:TopheadingComponent
  },
  {
    path:"sports",component:SportsNewsComponent
  },
  {
    path:"tech",component:TechNewsComponent
  }, {
    path:"bus",component:BusinessComponent
  }
  ,
  {
    path:"main",component:MainComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
