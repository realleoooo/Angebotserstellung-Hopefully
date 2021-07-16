import {Component, OnInit} from '@angular/core';
import {DatenbankService} from "../datenbank.service";

@Component({
  selector: 'app-uebersicht',
  templateUrl: './uebersicht.component.html',
  styleUrls: ['./uebersicht.component.scss']
})
export class UebersichtComponent implements OnInit {
  newId: number = this.datenbankService.getMockTabellenDaten().length;

  constructor(private datenbankService: DatenbankService) {
  }

  ngOnInit(): void {
  }

  addAngebot() {
    this.datenbankService.addAngebot();
  }
}
