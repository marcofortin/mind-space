import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent implements OnInit {
  // variable
  prompt:string = "Describe your day in three words!";
  keywords:string;
  placeholder:string = "Enter a space between each word";
  currentDate:string;

  constructor(public datePipe:DatePipe, private router: Router) { }

  ngOnInit() {
    //this.currentDate = this.datePipe.transform(new Date(), 'EEEE');
    // hard-coded for demo
    this.currentDate = "Tuesday";
  }

  isFriday(): boolean {
    return this.currentDate == 'Monday';
  }

  isMonday(): boolean {
    return this.currentDate == 'Monday';
  }
  
  onClick() {
    let photoUrl:string;

    fetch('https://api.shutterstock.com/v2/images/search?query=' + this.keywords, {
      headers: {
        Authorization: 'Basic d211NktDdmViTk1leXJ0Z0tBa2JPRXlUejFpa3ZwMnA6RGRacVpNWTZCcUk5dVpQZQ=='
      }
      
    }).then(response => response.json()).then((myJson) => {
      photoUrl = myJson.data[0].assets.preview.url;
      localStorage.setItem("photoUrl",photoUrl);
      this.router.navigate(['/dashboard']);
      });
    
  }

}
