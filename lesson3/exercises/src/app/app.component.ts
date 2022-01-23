import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';
  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffEnabled: boolean = true;
  diveHeight = 400
  divWidth = 400

  handleTakeOff() {
    let result = window.confirm('Are you sure the shuttle is ready for takeOff?');

    if(result) {
      this.color = 'blue';
      this.height = 10000;
      this.width = 0;
      this.message = 'Shuttle in flight';
      this.takeOffEnabled = false;
    }
  }

  handleAbort(launchRocketImage) {
    let confirmation = confirm("Confirm that you want to abort the mission.");

    if(confirmation) {
      this.message = "Mission aborted..";
      this.color = 'green';
      this.height = 0;
      launchRocketImage.style.bottom = '0px';
      this.takeOffEnabled = !this.takeOffEnabled;
    }

  }

  handleLand(launchRocketImage) {
    window.alert("The shuttle is landing. Landing gear engaged.");        
    this.message = "The shuttle has landed.";
    this.color = 'green';
    this.height = 0;
    launchRocketImage.style.bottom = '0px'
    this.takeOffEnabled = !this.takeOffEnabled;

  }

  reachingLimits(launchRocketImage) {
    if(this.diveHeight-80 === parseInt(launchRocketImage.style.top)){
        this.color = 'orange';
    }

    if(this.divWidth-20 === parseInt(launchRocketImage.style.left)) {
       this.color = 'orange';
    }

  }

  moveRocket(launchRocketImage, direction:string): void {
    if(direction === 'right') {
       let movement = parseInt(launchRocketImage.style.left) + 10 + 'px';
       launchRocketImage.style.left = movement;
       this.width += 10000

    } else if(direction === 'left') {
      let movement = parseInt(launchRocketImage.style.left) - 10 + 'px';
       launchRocketImage.style.left = movement;
       this.width -= 10000
      
    } else if(direction === 'up') {
      let movement = parseInt(launchRocketImage.style.bottom) + 10 + 'px';
       launchRocketImage.style.bottom = movement;
       this.height += 10000
    } else if(direction === 'down') {
      let movement = parseInt(launchRocketImage.style.bottom) - 10 + 'px';
       launchRocketImage.style.bottom = movement;
       this.height -= 10000
    }
    console.log(parseInt(launchRocketImage.style.bottom))

    this.reachingLimits(launchRocketImage)
  }
}
