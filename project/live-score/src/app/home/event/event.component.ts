import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  @Input() eventItem: any;
  isLive: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  changeWord(text){
    switch(text){
      case 'starting': this.isLive = true; return '競賽進行中';
      case 'preparing': this.isLive = false; return '競賽尚未開始';
      case 'finished': this.isLive = false; return '競賽已結束';
    }
  }

  doChooseEvent(){
    sessionStorage.setItem('eventItem', JSON.stringify(this.eventItem));
    this.router.navigate(['/types'])
  }

}
