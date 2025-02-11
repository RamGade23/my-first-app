import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  headline = 'Home Page!'; //Normal variable
  signalMessage = signal('Signal message from HomeComponent'); //Signal variable

  changeMessage() {
    console.log("changeMessage called");
    //this.signalMessage.update(() => 'You clicked the button');
    this.headline = 'You clicked the button';
  }

}
