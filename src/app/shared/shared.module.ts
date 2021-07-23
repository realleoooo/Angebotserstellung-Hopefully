import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OfferTitleDialogComponent} from "./offerTitle-dialog/offerTitle-dialog.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {ClearDialogComponent} from './clear-dialog/clear-dialog.component';
import {CreateTextBlockDialogComponent} from "./create-text-block-dialog/create-text-block-dialog.component";
import { EditTextBlockDialogComponent } from './edit-text-block-dialog/edit-text-block-dialog.component';

@NgModule({
  declarations: [
    OfferTitleDialogComponent,
    ClearDialogComponent,
    CreateTextBlockDialogComponent,
    EditTextBlockDialogComponent,
  ],
    imports: [
        CommonModule,
        MatFormFieldModule,
        FormsModule,
        MatDialogModule,
        MatInputModule,
        MatButtonModule,
        MatSnackBarModule,
        ReactiveFormsModule,
    ]
})
export class SharedModule { }
