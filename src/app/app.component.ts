import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private _httpService: HttpService) {}

  title = 'covid19App';
  apiSummary;
  apiLocation=[];

  ngOnInit(): void {
    this._httpService.getCovid19Detail().subscribe(Response =>{
      this.apiLocation = Response.data.regional;
      console.log(this.apiSummary);
    });
  }

}
