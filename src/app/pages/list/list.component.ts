import { People } from './../../model/people';
import { SwapiService } from './../../services/swapi.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  result : People[];
  skinColors: String[];
  formCliente: FormGroup;

  constructor(private swapiService : SwapiService) { }

  ngOnInit() {
    this.createForm()
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

  createForm() {
    this.formCliente = new FormGroup({
      name: new FormControl(),
      skinColors: new FormControl(),
      dateInitial: new FormControl(),
      dateFinal: new FormControl(),
    })}

  filter(){
    if (this.formCliente.get('name').value) {
      this.result = this.result.filter(data => data.name.includes(this.formCliente.get('name').value))
    }
    if (this.formCliente.get('skinColors').value) {
      this.result = this.result.filter(data => data.skin_color.includes(this.formCliente.get('skinColors').value))
    }






  }

}
