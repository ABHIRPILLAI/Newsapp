import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }

  newsapiURL = " https://newsapi.org/v2/top-headlines?country=in&apiKey=6b85b46497f049bb9f38993d62fd1c46"

  newssportsURL = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=6b85b46497f049bb9f38993d62fd1c46"

  techurl = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=6b85b46497f049bb9f38993d62fd1c46"

  busUrl = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=6b85b46497f049bb9f38993d62fd1c46"





  topHeading():Observable<any>
  {
    return this._http.get(this.newsapiURL)
  }
  sports():Observable<any>
  {
    return this._http.get(this.newssportsURL)
  }

  tech():Observable<any>
  {
    return this._http.get(this.techurl)
  }
  business():Observable<any>
  {
    return this._http.get(this.busUrl)
  }
}
