import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  file: any;
  file_name: any;
  event_id: any;

  constructor(private http: Http) {
  }
  ngOnInit() {
  }

  fileChangeEvent(event) {
    let fileList: FileList = event.target.files;

    if (fileList.length > 0) {
      var file = fileList[0];
      this.file_name = file.name;
      var reader = new FileReader();
      var self = this;
      reader.onload = function (e: any) {
        self.file = e.target.result;
      }
      reader.readAsDataURL(file);
    }


  }

  makeBlob(dataURI) {
    // convert base64 to raw binary data held in a string
    // doesn't handle URLEncoded DataURIs
    var byteString = atob(dataURI.split(',')[1]);

    // separate out the mime component
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

    var array = [];
    for (var i = 0; i < byteString.length; i++) {
      array.push(byteString.charCodeAt(i));
    }

    var blob = new Blob([new Uint8Array(array)], { type: mimeString });
    return blob;
  }

  doSendFile() {


    if (this.file === undefined || this.event_id == null || this.event_id == "") {
      alert("請填寫正確");
      return;
    }

    console.log(this.event_id)
    let formData = new FormData();
    formData.append('file', this.makeBlob(this.file), this.file_name);
    formData.append('event_id', this.event_id)

    let headers = new Headers({
      'Mime-Type': 'multipart/form-data'
    });
    let options = new RequestOptions({ headers: headers });

    this.http.post('http://huangserver.ddns.net:3030/upload/games', formData, options)
      .subscribe(result => {

      })
  }

  doClearFile() {
    if (this.event_id == null || this.event_id == "") {
      alert("請填寫正確");
      return;
    }
    this.http.delete('http://huangserver.ddns.net:3030/events/clean/' + this.event_id);
  }

}
