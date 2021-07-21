import {Component, OnInit} from '@angular/core';
import {DatenbankService} from "../datenbank.service";
import {InputDialogComponent} from "../shared/input-dialog/input-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {SnackbarService} from "../shared/snackbar.service";


@Component({
  selector: 'app-uebersicht',
  templateUrl: './uebersicht.component.html',
  styleUrls: ['./uebersicht.component.scss']
})
export class UebersichtComponent implements OnInit {
  newId: number = Math.max(...this.datenbankService.getMockTabellenDaten().map(element => element.id)) + 1;

  constructor(private datenbankService: DatenbankService,
              private inputdialog: MatDialog,
              private router: Router,
              private snackbar: SnackbarService) {
  }

  ngOnInit(): void {
  }

  addAngebot() {
    const dialogData = this.inputdialog.open(InputDialogComponent, {
      width: '400px'
    });

    dialogData.afterClosed().subscribe(result => {
      if (result) {
        this.datenbankService.addAngebot(
          this.datenbankService.getMockTabellenDaten().length,
          "", result, new Date().toISOString().slice(0, 10));
        this.router.navigate(["angebot", this.newId]);
        this.snackbar.openSnackbarSuccess("Angebot " + result + " wurde erfolgreich erstellt.", "Ok")
      } else {
        this.snackbar.openSnackbarCancel("Angebot wurde nicht erstellt.", "Ok")
      }
    })
  }
}
