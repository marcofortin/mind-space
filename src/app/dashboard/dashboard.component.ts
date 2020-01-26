import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dasshboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  currentDate:string;
  monUrl:string = "../../assets/Mon.PNG";
  tueUrl:string = "../../assets/Tue.PNG";
  wedUrl:string = "../../assets/Wed.PNG";
  thuUrl:string = "../../assets/Thu.PNG";
  friUrl:string = "../../assets/Fri.PNG";

  constructor(public datePipe:DatePipe) { }

  ngOnInit() {
    let updatedUrl = localStorage.getItem("photoUrl");
    if (updatedUrl) {
      this.currentDate = this.datePipe.transform(new Date(), 'EEEE');
      if (this.currentDate == 'Monday') this.monUrl = updatedUrl;
      else if (this.currentDate == 'Tuesday') this.tueUrl = updatedUrl;
      else if (this.currentDate == 'Wednesday') this.wedUrl = updatedUrl;
      else if (this.currentDate == 'Thursday') this.thuUrl = updatedUrl;
      else this.friUrl = updatedUrl;
      localStorage.setItem("photoUrl", "");
    }
  }
}
