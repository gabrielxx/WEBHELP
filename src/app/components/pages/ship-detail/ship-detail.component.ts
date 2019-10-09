import { Component, OnInit } from '@angular/core';
import { StarshipsService } from '../../../providers/starships.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ship-detail',
  templateUrl: './ship-detail.component.html',
  styleUrls: ['./ship-detail.component.less']
})
export class ShipDetailComponent implements OnInit {

  public id : string;
  public starshipDetail : any;
  constructor(private _starshipsService :StarshipsService, private route : ActivatedRoute) { }

  ngOnInit() {
    this.onLoadDataShip();
  }

  onLoadDataShip(){
    this.id = this.route.snapshot.paramMap.get("id");
    this._starshipsService.getDetailStarShips(this.id).subscribe((data) => {
      this.starshipDetail = data;
    })
  }

}
