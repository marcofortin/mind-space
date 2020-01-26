import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent implements OnInit {
  // variable
  prompt:string = "Describe your day in five words!";
  keywords:string;
  placeholder:string = "Enter a space between each word";
  currentDate:string;

  constructor(public datePipe:DatePipe) { }

  ngOnInit() {
    this.currentDate = this.datePipe.transform(new Date(), 'EEEE');
  }

  isFriday(): boolean {
    return this.currentDate == 'Friday';
  }

  isMonday(): boolean {
    return this.currentDate == 'Monday';
  }
  
  onClick() {

    let photoUrl:string = "party";

    fetch('https://api.shutterstock.com/v2/images/search?query=' + this.keywords, {
      headers: {
        Authorization: 'Basic d211NktDdmViTk1leXJ0Z0tBa2JPRXlUejFpa3ZwMnA6RGRacVpNWTZCcUk5dVpQZQ=='
      }
      
    }).then(response => response.json()).then((myJson) => {
      photoUrl = myJson.data[0].assets.preview.url;
      console.log(photoUrl);
      });
    
  }

}
