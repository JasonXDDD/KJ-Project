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

  doChooseEvent(){
    sessionStorage.setItem('eventItem', JSON.stringify(this.eventItem));
    this.router.navigate(['/types'])
  }

}
