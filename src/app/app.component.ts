import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1> {{ title }} </h1>
  <img [src]="imageUrl" (click)='myClick($event)'>
  <img src="{{imageUrl}}" on-mouseover="myHover()">
  <img src="{{imageUrl}}" on-mouseout="myHoverOut()">
  <input [value]='myMethod()'>
  <input (keyup)="userInput($event)">
  <p> {{ myType }} </p>
  `
})
export class AppComponent {
  myType = '';
  title = 'This is my first Application';
  imageUrl = 'https://angular.io/assets/images/logos/angular/angular.png';
  myMethod(){
    if(1 < 2){
      return 'Hey!';
    } else {
      return 'Yo!';
    }
  }

  myClick(event:any){
    console.log(event);
  }

  myHover(){
    console.log('You hovered over the image!');
  }

  myHoverOut(){
    console.log('Why are you leaving?');
  }

  userInput(event:any){
    this.myType = event.target.value;
  }
}
