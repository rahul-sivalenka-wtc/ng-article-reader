import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title;

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('api/appName')
    .map(res => res.json()).subscribe(res => this.title = res.data);
  }
}
