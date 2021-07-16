import {Injectable} from '@angular/core';
import {Angebote} from "./uebersicht/uebersicht-tabelle/angebote";


@Injectable({
  providedIn: 'root'
})
export class DatenbankService {

  private _MockTabellenDaten: Angebote[] = [
    {id: 0, kunde: '', angebotstitel: '', erstellungsdatum: new Date().toISOString().slice(0, 10)},
    {id: 1, kunde: '', angebotstitel: '', erstellungsdatum: new Date().toISOString().slice(0, 10)},
    {id: 2, kunde: '', angebotstitel: '', erstellungsdatum: new Date().toISOString().slice(0, 10)},
    {id: 3, kunde: '', angebotstitel: '', erstellungsdatum: new Date().toISOString().slice(0, 10)},
    {id: 4, kunde: '', angebotstitel: '', erstellungsdatum: new Date().toISOString().slice(0, 10)},
    {id: 5, kunde: '', angebotstitel: '', erstellungsdatum: new Date().toISOString().slice(0, 10)},
    {id: 6, kunde: '', angebotstitel: '', erstellungsdatum: new Date().toISOString().slice(0, 10)},
  ];


  constructor() {
  }

  getMockTabellenDaten(): Angebote[] {
    return this._MockTabellenDaten;
  }

  addAngebot() {
    this._MockTabellenDaten.push(
      {
        id: this._MockTabellenDaten.length,
        kunde: '',
        angebotstitel: '',
        erstellungsdatum: new Date().toISOString().slice(0, 10)
      }
    )
  }

  deleteData(angebot: Angebote) {
    this._MockTabellenDaten = this._MockTabellenDaten.filter((a) => a.id !== angebot.id);
  }


}
