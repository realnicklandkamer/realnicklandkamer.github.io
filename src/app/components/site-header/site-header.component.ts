import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tb-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.scss']
})
export class SiteHeaderComponent implements OnInit {
  localTime = new Date().toLocaleString('en-US', {timeZone: 'America/Belize'});

  constructor() { }

  ngOnInit() {
    this.getNewDateTime();
  }

  getNewDateTime() {
    setInterval(() => {
      this.localTime = new Date().toLocaleString('en-US', {timeZone: 'America/Belize'});
    }, 1000);
  }

}
