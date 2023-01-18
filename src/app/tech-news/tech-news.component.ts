import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from "../service/newsapiservices.service";


@Component({
  selector: 'app-tech-news',
  templateUrl: './tech-news.component.html',
  styleUrls: ['./tech-news.component.css']
})
export class TechNewsComponent implements OnInit {

  
  constructor(private _services:NewsapiservicesService) { }


  tech:any=[];
  ngOnInit(): void {
    this._services.tech().subscribe((
      result
    )=>
    {
      console.log(result);
      this.tech=result.articles;
      
      
    })
  }

}
