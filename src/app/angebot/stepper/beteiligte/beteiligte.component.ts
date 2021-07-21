import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {DatenbankService} from "../../../datenbank.service";
import {Router} from "@angular/router";
import {SnackbarService} from "../../../shared/snackbar.service";

@Component({
  selector: 'app-beteiligte',
  templateUrl: './beteiligte.component.html',
  styleUrls: ['./beteiligte.component.scss']
})
export class BeteiligteComponent implements OnInit {

  beteiligteData = {
    kundenData: new FormGroup({
      unternehmensname: new FormControl(),
      abteilung: new FormControl(),
      strasse: new FormControl(),
      plz: new FormControl()
    }),
    angebotserstellerData: new FormGroup({
      name: new FormControl(),
      abteilung: new FormControl(),
      telefon: new FormControl(),
      email: new FormControl()
    })
  };

  titel = new FormControl();


  constructor(
    private datenbankService: DatenbankService,
    private router: Router,
    private snackbar: SnackbarService
  ) {
  }

  ngOnInit(): void {
    let id = Number(this.router.url.split("/").pop());
    let data = this.datenbankService.getMockTabellenDaten().find(element => element.id === id)!;
    this.beteiligteData.kundenData.setValue({
      unternehmensname: data.kundenData?.unternehmensname,
      abteilung: data.kundenData?.abteilung,
      strasse: data.kundenData?.strasse,
      plz: data.kundenData?.plz
    });
    this.beteiligteData.angebotserstellerData.setValue({
      name: data.angebotserstellerData?.name,
      abteilung: data.angebotserstellerData?.abteilung,
      telefon: data.angebotserstellerData?.telefon,
      email: data.angebotserstellerData?.email
    });
    this.titel.setValue(
      data.angebotstitel
    )
  }

  correctAngebotstitel(angebotstitel: string) {
    let id = Number(this.router.url.split("/").pop());
    this.datenbankService.correctAngebotstitel(angebotstitel, id);
    this.snackbar.openSnackbarSuccess("Angebotstitel wurde geändert.", "Ok");
  }

  save() {
    let id = Number(this.router.url.split("/").pop());
    this.datenbankService.saveBeteiligte(
      this.beteiligteData.kundenData.value,
      this.beteiligteData.angebotserstellerData.value,
      id
    )
    this.snackbar.openSnackbarSuccess("Angebot wurde erfolgreich gespeichert.", "Ok");
  }
}
