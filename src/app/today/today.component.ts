import { Component, OnInit } from '@angular/core';

// let photoUrl;

// fetch('https://api.shutterstock.com/v2/images/search?query=donutdog', {
//   headers: {
//     Authorization: 'Basic d211NktDdmViTk1leXJ0Z0tBa2JPRXlUejFpa3ZwMnA6RGRacVpNWTZCcUk5dVpQZQ=='
//   }
  
// }).then(response => response.json()).then((myJson) => {
//   photoUrl = myJson.data[0].assets.preview.url;
//   });

// console.log(photoUrl);

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent implements OnInit {
  // variable
  greeting:string = "Today!";
  prompt:string = "Describe your day in five words!";
  keywords:string;
  placeholder:string = "Enter a space between each word";

  constructor() { }

  ngOnInit() {
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
