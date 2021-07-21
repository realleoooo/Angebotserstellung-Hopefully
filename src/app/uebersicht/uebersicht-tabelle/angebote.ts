import {Kunde} from "../../angebot/stepper/beteiligte/kunde";
import {Angebotsersteller} from "../../angebot/stepper/beteiligte/angebotsersteller";

export interface Angebote {
  id: number;
  kunde: string;
  angebotstitel: string;
  erstellungsdatum: string;
  kundenData: Kunde;
  angebotserstellerData: Angebotsersteller;
}
