import {Component, OnInit} from '@angular/core';
import {Angebote} from "./angebote";
import {DatenbankService} from "../../datenbank.service";
import {MatTableDataSource} from "@angular/material/table";
import {Router} from "@angular/router";
import {SnackbarService} from "../../shared/snackbar.service";

@Component({
  selector: 'app-uebersicht-tabelle',
  templateUrl: './uebersicht-tabelle.component.html',
  styleUrls: ['./uebersicht-tabelle.component.scss']
})
export class UebersichtTabelleComponent implements OnInit {
  displayedColumns: string[] = ['kunde', 'angebotstitel', 'erstellungsdatum', 'operation'];
  dataSource : MatTableDataSource<Angebote> = new MatTableDataSource(this.datenbankService.getMockTabellenDaten());

  constructor(
    private datenbankService: DatenbankService,
    private router: Router,
    private snackbar: SnackbarService
    ) {
  }

  ngOnInit(): void {
    let id = Number(this.router.url.split("/").pop());
    let data = this.datenbankService.getMockTabellenDaten().find(element => element.id === id)!;
  }

  deleteData(angebot: Angebote) {
    this.datenbankService.deleteData(angebot);
    this.dataSource = new MatTableDataSource(this.datenbankService.getMockTabellenDaten());
    this.snackbar.openSnackbarSuccess("Angebot " + angebot.angebotstitel + " wurde erfolgreich gelöscht.", "Ok");
  }

  copyAngebot(angebot: Angebote) {
    this.datenbankService.copyAngebot(angebot, angebot.kunde, angebot.angebotstitel, angebot.erstellungsdatum, angebot.kundenData, angebot.angebotserstellerData);
    this.dataSource = new MatTableDataSource(this.datenbankService.getMockTabellenDaten());
    this.snackbar.openSnackbarSuccess("Angebot " + angebot.angebotstitel + " wurde erfolgreich kopiert.", "Ok");
  }


}
