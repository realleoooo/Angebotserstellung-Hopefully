import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FirstHeaderComponent} from './first-header/first-header.component';
import {SecondHeaderComponent} from './second-header/second-header.component';
import {SearchbarComponent} from './shared/searchbar/searchbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {OverviewComponent} from './overview/overview.component';
import {MatTableModule} from "@angular/material/table";
import {OverviewTableComponent} from './overview/overview-table/overview-table.component';
import {OfferComponent} from './offer/offer.component';
import {StepperComponent} from './offer/stepper/stepper.component';
import {MatStepperModule} from "@angular/material/stepper";
import {TextBlockComponent} from './textBlock/textBlock.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InvolvedPersonsComponent} from './offer/stepper/involvedPersons/involvedPersons.component';
import {HintsComponent} from './offer/stepper/hints/hints.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatInputModule} from "@angular/material/input";
import {InitialSituationComponent} from './offer/stepper/initialSituation/initialSituation.component';
import {SituationComponent} from './offer/stepper/initialSituation/situation/situation.component';
import {BlocksComponent} from './offer/stepper/textBlock/blocks/blocks.component';
import {ConditionsComponent} from './offer/stepper/conditions/conditions.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {OperationBarComponent} from './shared/operation-bar/operation-bar.component';
import {MatButtonModule} from "@angular/material/button";
import {SharedModule} from "./shared/shared.module";
import {MatPaginatorModule} from "@angular/material/paginator";
import {TextBlockTableComponent} from './textBlock/text-block-table/text-block-table.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstHeaderComponent,
    SecondHeaderComponent,
    SearchbarComponent,
    OverviewComponent,
    OverviewTableComponent,
    OfferComponent,
    StepperComponent,
    TextBlockComponent,
    InvolvedPersonsComponent,
    HintsComponent,
    InitialSituationComponent,
    SituationComponent,
    BlocksComponent,
    ConditionsComponent,
    OperationBarComponent,
    TextBlockTableComponent,
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
    SharedModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
