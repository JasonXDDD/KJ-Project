import { element } from 'protractor';
import { Http } from '@angular/http';
import { Component, OnInit, NgZone } from '@angular/core';
import { DatePipe } from '@angular/common';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  typeItem: any;
  roundrobin: any;
  constructor(private http: Http, private datePipe: DatePipe, private zone: NgZone) {
    this.roundrobin = {
      class: [],
      data: {},
      games: []
    }
  }

  ngOnInit() {

    this.typeItem = JSON.parse(sessionStorage.getItem('typeItem'))
    this.doGetGames();

    Observable.create(observer =>{
      var socket = io('http://huangserver.ddns.net:3030/');
      var app = feathers()
        .configure(feathers.hooks())
        .configure(feathers.socketio(socket));
      //When games update
      socket.on('patched', (message) => {
        console.log('Someone patched a message', message);
        observer.next(message)
      })
    })

    .subscribe(message => {
      this.zone.run(()=>{
        this.roundrobin.games.forEach(element => {
          if(element.game_id === message.game_id) element = message;
        });
      })
    })

    // this.doShowKnockoutScore();

  }

  doGetGames(){
    this.http.get('http://huangserver.ddns.net:3030/games/round/' + this.typeItem.type_id)
      .subscribe(result =>{
        this.roundrobin.class = Object.keys(result.json());
        this.roundrobin.data = result.json();
        this.roundrobin.class.forEach(element=>{
          this.roundrobin.data[element].games.forEach(game => {
            this.roundrobin.games.push(game);
          });
        })

        console.log(this.roundrobin.games)
      })
  }
  doShowRoundRobinScore(){

  }

  calcScore(gameClass, idRight, idTop){
    var game;
    var type;
    this.roundrobin.data[gameClass].games.forEach(element=>{
      if(element.team_A_id ===  idRight && element.team_B_id === idTop){
        game = element;
        if (element.game_status === "preparing") type = 3;
        else type = 1;
      }
      else if(element.team_A_id === idTop && element.team_B_id ===  idRight){
        game = element;
        if (element.game_status === "preparing") type = 3;
        else type = 2;
      }
      else if(element.team_A_id === element.team_B_id){
        type = 0;
      }
    });

    if(type === 1) return game.team_A_score + ":" + game.team_B_score;
    else if(type === 2) return game.team_B_score + ":" + game.team_A_score;
    else if(type === 3) return "[" + game.game_place + "]\n" + this.datePipe.transform(game.game_date, 'yyyy.MM.dd') + "\n" + game.game_time;
    else return "＼\n　＼\n　　＼";
  }


  initSocket(observer) {

  }














  doShowKnockoutScore() {

    var minimalData = {
      teams: [
        ["Team 1", "Team 2"], /* first matchup */
        ["Team 3", "Team 4"],  /* second matchup */
        ["Team 12", "Team 12"], /* first matchup */
        ["Team 13", "Team 14"]  /* second matchup */
      ],
      results: [
        [[22, 12], [3, 45]],       /* first round */
        [[3, 44], [2, 1]]        /* second round */
      ]
    }

    // $(function () {
    //   $('#score').bracket({
    //     init: minimalData /* data to initialize the bracket with */
    //   })
    // })
  }

}
