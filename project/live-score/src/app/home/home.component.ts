import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  eventList: any;

  constructor(private http: Http) {

  }

  ngOnInit() {
    sessionStorage.clear();
    this.doGetEvent();
  }

  doGetEvent(){
    this.http.get('http://huangserver.ddns.net:3030/events')
      .subscribe(result =>{
        this.eventList = result.json()
      })
  }
}
