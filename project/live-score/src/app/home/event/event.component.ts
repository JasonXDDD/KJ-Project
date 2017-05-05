import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  @Input() eventItem: any;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  changeWord(text){
       switch(text){
      case 'starting': return '競賽進行中';
      case 'preparing': return '競賽尚未開始';
      case 'finished': return '競賽已結束';
    }
  }

  doChooseEvent(){
    sessionStorage.setItem('eventItem', JSON.stringify(this.eventItem));
    this.router.navigate(['/types'])
  }

}
