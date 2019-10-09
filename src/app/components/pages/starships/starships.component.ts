import { Component, OnInit } from '@angular/core';
import { StarshipsService } from '../../../providers/starships.service';
@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.less']
})
export class StarshipsComponent implements OnInit {

  public starships: any;
  public previous:string;
  public next:string;

  constructor(private _starshipsService: StarshipsService) { }

  ngOnInit() {
    this.onLoadStarShip()
  }

  onLoadStarShip() {
    this._starshipsService.getStarShips().subscribe(data => {
      this.starships = data.results;
      this.next = data.next;
      this.previous = data.previous;
    });

  }

  onLoadUrlStarShips(url){
    this._starshipsService.getStarShipsUrl(url).subscribe(data => {
      this.starships = data.results;
      this.next = data.next;
      this.previous = data.previous;
    });
  }
  getId(url) {
    return url.split("/").filter(function (item) {
      return item !== "";
    }).slice(-1)[0];
  }

}
