import { People } from './../../model/people';
import { SwapiService } from './../../services/swapi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  result : People[];
  skinColors: String[];

  constructor(private swapiService : SwapiService) { }

  ngOnInit() {
    this.swapiService.getPeople().subscribe(
      data => {

        this.result = data.results;
        console.log(this.result);
        let colors = this.result.map(
          data => data.skin_color
          );
        let colorSingle = new Set(colors);
        this.skinColors = [...colorSingle]
        console.log(this.skinColors);



      }
    )
  }

}
