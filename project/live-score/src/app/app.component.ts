import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  ngOnInit() {
    this.initSocket();
  }

  initSocket() {
    var socket = io('http://huangserver.ddns.net:3030/');
    var app = feathers()
      .configure(feathers.hooks())
      .configure(feathers.socketio(socket));

    //When games update
    socket.on('patched', (message) => {
      console.log('Someone patched a message', message);
    });
  }
}
