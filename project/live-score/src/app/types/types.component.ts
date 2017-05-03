import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent implements OnInit {
  eventItem: any
  typesList: any;
  typesName: any;
  selectTypes: any;

  constructor(private router: Router, private http: Http) { }

  ngOnInit() {
    var eventStr = sessionStorage.getItem('eventItem');
    if(eventStr === null)
      this.router.navigate(['/index']);
    else{
      this.eventItem = JSON.parse(eventStr);
      this.doGetTypes();
    }

  }

  doGetTypes(){
    this.http.get('http://huangserver.ddns.net:3030/types?event_id='+this.eventItem.event_id)
      .subscribe(result=>{
          this.typesList = result.json();
          console.log(this.typesList)
          this.typesName = Object.keys(this.typesList);
      })
  }

  doChooseTypes(target){
    var targetId;

    Object.keys(this.typesList).forEach(function(element, index, array){
      if(element === target) targetId = index;
    })

    console.log(this.typesList[targetId])
  }

}
