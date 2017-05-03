import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.doShowScore();
  }

  doShowScore() {

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
