import {Component, OnInit} from '@angular/core';
import {Angebote} from "./angebote";
import {MockTabellenDaten} from "./mock-tabellenDaten";
import {DatenbankService} from "../../datenbank.service";

@Component({
  selector: 'app-uebersicht-tabelle',
  templateUrl: './uebersicht-tabelle.component.html',
  styleUrls: ['./uebersicht-tabelle.component.scss']
})
export class UebersichtTabelleComponent implements OnInit {
  displayedColumns: string[] = ['kunde', 'angebotstitel', 'erstellungsdatum', 'operation'];
  dataSource : Angebote[] = this.datenbankService.getMockTabellenDaten();

  constructor(private datenbankService: DatenbankService) {
  }

  ngOnInit(): void {
  }

  deleteData(angebot: Angebote) {
    this.datenbankService.deleteData(angebot);
    this.dataSource = this.datenbankService.getMockTabellenDaten();
  }

  copyData() {

  }
}
