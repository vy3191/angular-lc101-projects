import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent implements OnInit {
   missionName = "LaunchCode Moonshot";
   editMissionName: boolean = false;

   candidates: Object[] = [
    {name: 'Rusty Rutabaga', data: {age: 5, mass: '0.75 kg', sidekick: 'Blake'}, image: 'assets/images/Blake.png'},
    {name: 'Tessa Tortoise', data: {age: 126, mass: '113 kg', sidekick: 'Sally'}, image: 'assets/images/Sally.png'},
    {name: 'Bernie Beagle', data: {age: 4, mass: '15 kg', sidekick: 'Paul'}, image: 'assets/images/Paul.png'},
    {name: 'Jackalope', data: {age: 45, mass: '33 kg', sidekick: 'Chris'}, image: 'assets/images/Chris.png'},
    {name: 'Champ', data: {age: 9, mass: '36 kg', sidekick: 'Carly'}, image: 'assets/images/Carly.png'}
  ];

  crew: Object[] = [];
  // BONUS: Code the changeMissionName function here:
  changeMissionName(name: string): void {
    this.missionName = name;
    this.editMissionName = false;
  }

 
  constructor() { }

  ngOnInit() {
  }

  // Code the addToCrew function here:
  addToCrew(member: Object): void {
   
    if(this.crew.indexOf(member) === -1) {
      this.crew.push(member)
    } 
  }


}
