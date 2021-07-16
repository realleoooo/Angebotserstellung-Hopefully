import { Component, OnInit } from '@angular/core';
import {TextboxSituation} from "./textboxSituation";
import {mockSituations} from "./mockSituations";

@Component({
  selector: 'app-situation',
  templateUrl: './situation.component.html',
  styleUrls: ['./situation.component.scss']
})
export class SituationComponent implements OnInit {
  sit: TextboxSituation[] = mockSituations;

  constructor() { }

  ngOnInit(): void {
  }

  addField() {
    const newSituation = {id: this.sit.length, situation: ''}as TextboxSituation;
    this.sit.push(newSituation);
  }

  deleteField(s: TextboxSituation) {
    let index: number = this.sit.indexOf(s);
    this.sit = this.sit.filter((_, i) => i != index);
  }

}
