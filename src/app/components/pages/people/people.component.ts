import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../../providers/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.less']
})
export class PeopleComponent implements OnInit {

  public people : any;
  
  constructor(private _peopleService : PeopleService) { }

  ngOnInit() {
    this.onLoadPeople();
  }
  onLoadPeople(){
    this._peopleService.getStarShips().subscribe(data => {
      this.people = data.results;
    })
  }

}
