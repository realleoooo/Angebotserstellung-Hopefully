import {Injectable} from '@angular/core';
import {Angebote} from "./uebersicht/uebersicht-tabelle/angebote";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Kunde} from "./angebot/stepper/beteiligte/kunde";
import {Angebotsersteller} from "./angebot/stepper/beteiligte/angebotsersteller";

@Injectable({
  providedIn: 'root'
})
export class DatenbankService {

  private _MockTabellenDaten: Angebote[] = [
    {
      id: 1,
      kunde: 'Thomas Müller',
      angebotstitel: 'Baba',
      erstellungsdatum: new Date().toISOString().slice(0, 10),
      kundenData: {abteilung: "alt", plz: "alt", strasse: "", unternehmensname: ""},
      angebotserstellerData: {abteilung: "", name: "", telefon: "", email: ""}
    },
    {
      id: 2,
      kunde: 'Bernd Schröder',
      angebotstitel: 'Pups',
      erstellungsdatum: new Date().toISOString().slice(0, 10),
      kundenData: {abteilung: "", plz: "", strasse: "", unternehmensname: ""},
      angebotserstellerData: {abteilung: "", name: "", telefon: "", email: ""}
    },
    {
      id: 3,
      kunde: 'Olaf Katzenberger',
      angebotstitel: 'Pops',
      erstellungsdatum: new Date().toISOString().slice(0, 10),
      kundenData: {abteilung: "", plz: "", strasse: "", unternehmensname: ""},
      angebotserstellerData: {abteilung: "", name: "", telefon: "", email: ""}
    },
    {
      id: 4,
      kunde: 'Ole Katze',
      angebotstitel: 'Brub',
      erstellungsdatum: new Date().toISOString().slice(0, 10),
      kundenData: {abteilung: "", plz: "", strasse: "", unternehmensname: ""},
      angebotserstellerData: {abteilung: "", name: "", telefon: "", email: ""}
    },
    {
      id: 5,
      kunde: 'Lela Gr',
      angebotstitel: 'Bobo',
      erstellungsdatum: new Date().toISOString().slice(0, 10),
      kundenData: {abteilung: "", plz: "", strasse: "", unternehmensname: ""},
      angebotserstellerData: {abteilung: "", name: "", telefon: "", email: ""}
    },
    {
      id: 6,
      kunde: 'Finn Kratze',
      angebotstitel: 'Cool',
      erstellungsdatum: new Date().toISOString().slice(0, 10),
      kundenData: {abteilung: "", plz: "", strasse: "", unternehmensname: ""},
      angebotserstellerData: {abteilung: "", name: "", telefon: "", email: ""}
    },
    {
      id: 7,
      kunde: 'Blub',
      angebotstitel: 'Blab',
      erstellungsdatum: new Date().toISOString().slice(0, 10),
      kundenData: {abteilung: "", plz: "", strasse: "", unternehmensname: ""},
      angebotserstellerData: {abteilung: "", name: "", telefon: "", email: ""}
    },
  ];

  getMockTabellenDaten(): Angebote[] {
    return this._MockTabellenDaten;
  }

  private _KundenData: Kunde = {abteilung: "", plz: "", strasse: "", unternehmensname: ""};

  private _AngebotserstellerData: Angebotsersteller = {abteilung: "", email: "", name: "", telefon: ""};

  saveBeteiligte(kundenData: Kunde, angebotserstellerData: Angebotsersteller, id: number) {
    this._MockTabellenDaten.find(element => element.id === id)!.kundenData.unternehmensname  = this._KundenData.unternehmensname;
    this._KundenData.unternehmensname = kundenData.unternehmensname;
    this._KundenData.abteilung = kundenData.abteilung;
    this._KundenData.strasse = kundenData.strasse;
    this._KundenData.plz = kundenData.plz;
    this._AngebotserstellerData.name = angebotserstellerData.name;
    this._AngebotserstellerData.abteilung = angebotserstellerData.abteilung;
    this._AngebotserstellerData.telefon = angebotserstellerData.telefon;
    this._AngebotserstellerData.email = angebotserstellerData.email;
    this._MockTabellenDaten.find(element => element.id === id)!.kundenData = this._KundenData;
    this._MockTabellenDaten.find(element => element.id === id)!.angebotserstellerData = this._AngebotserstellerData;
  }

  constructor() {
  }

  addAngebot(id: number, kunde: string, angebotstitel: string, erstellungsdatum: string) {
    this._MockTabellenDaten.push(
      {
        id: Math.max(...this.getMockTabellenDaten().map(element => element.id)) + 1,
        kunde: kunde,
        angebotstitel: angebotstitel,
        erstellungsdatum: erstellungsdatum,
        kundenData: {abteilung: "", plz: "", strasse: "", unternehmensname: ""},
        angebotserstellerData: {abteilung: "", name: "", telefon: "", email: ""}
      }
    )
  }

  deleteData(angebot: Angebote) {
    this._MockTabellenDaten = this._MockTabellenDaten.filter((a) => a.id !== angebot.id);
  }

  copyAngebot(angebot: Angebote, kunde: string, angebotstitel: string, erstellungsdatum: string, kundenData: Kunde, angebotserstellerData: Angebotsersteller) {
    let newCopiedAngebot: Angebote = Object.assign({}, angebot);
    this._MockTabellenDaten.push(
      {
        id: Math.max(...this.getMockTabellenDaten().map(element => element.id)) + 1,
        kunde: kunde,
        angebotstitel: angebotstitel,
        erstellungsdatum: erstellungsdatum,
        kundenData: kundenData,
        angebotserstellerData: angebotserstellerData
      }
    )
  }

  correctAngebotstitel(angebotstitel: string, id: number) {
    this._MockTabellenDaten.find(element => element.id === id)!.angebotstitel = angebotstitel;
  }
}
