import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-dasshboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(localStorage.getItem("photoUrl"));
  }
}
