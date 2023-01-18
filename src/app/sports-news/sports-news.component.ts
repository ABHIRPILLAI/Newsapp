import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from "../service/newsapiservices.service";


@Component({
  selector: 'app-sports-news',
  templateUrl: './sports-news.component.html',
  styleUrls: ['./sports-news.component.css']
})
export class SportsNewsComponent implements OnInit {

  constructor(private _services:NewsapiservicesService) { }
  sportsDisplay:any=[];

  ngOnInit(): void {
    this._services.sports().subscribe((
      result
    )=>
    {
      console.log(result);
      this.sportsDisplay=result.articles;
      
      
    })
  }

}
