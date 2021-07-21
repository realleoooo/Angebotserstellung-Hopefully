import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FirstHeaderComponent} from './first-header/first-header.component';
import {SecondHeaderComponent} from './second-header/second-header.component';
import {SearchbarComponent} from './uebersicht/searchbar/searchbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {UebersichtComponent} from './uebersicht/uebersicht.component';
import {MatTableModule} from "@angular/material/table";
import {UebersichtTabelleComponent} from './uebersicht/uebersicht-tabelle/uebersicht-tabelle.component';
import {AngebotComponent} from './angebot/angebot.component';
import {StepperComponent} from './angebot/stepper/stepper.component';
import {MatStepperModule} from "@angular/material/stepper";
import {TextbausteineComponent} from './angebot/stepper/ausgangssituation/textbausteine/textbausteine.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BeteiligteComponent} from './angebot/stepper/beteiligte/beteiligte.component';
import {HinweiseComponent} from './angebot/stepper/hinweise/hinweise.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {KundeComponent} from './angebot/stepper/beteiligte/kunde/kunde.component';
import {AngebotserstellerComponent} from './angebot/stepper/beteiligte/angebotsersteller/angebotsersteller.component';
import {MatInputModule} from "@angular/material/input";
import {AusgangssituationComponent} from './angebot/stepper/ausgangssituation/ausgangssituation.component';
import {SituationComponent} from './angebot/stepper/ausgangssituation/situation/situation.component';
import {Searchbar2Component} from './angebot/stepper/ausgangssituation/textbausteine/searchbar2/searchbar2.component';
import {BausteineComponent} from './angebot/stepper/ausgangssituation/textbausteine/bausteine/bausteine.component';
import {KonditionenComponent} from './angebot/stepper/konditionen/konditionen.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {OperationBarComponent} from './angebot/stepper/beteiligte/operation-bar/operation-bar.component';
import {MatButtonModule} from "@angular/material/button";
import {SharedModule} from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    FirstHeaderComponent,
    SecondHeaderComponent,
    SearchbarComponent,
    UebersichtComponent,
    UebersichtTabelleComponent,
    AngebotComponent,
    StepperComponent,
    TextbausteineComponent,
    BeteiligteComponent,
    HinweiseComponent,
    KundeComponent,
    AngebotserstellerComponent,
    AusgangssituationComponent,
    SituationComponent,
    Searchbar2Component,
    BausteineComponent,
    KonditionenComponent,
    OperationBarComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatTableModule,
        MatStepperModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatCheckboxModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        FormsModule,
        MatButtonModule,
        SharedModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
