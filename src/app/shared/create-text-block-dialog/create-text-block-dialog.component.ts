import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup} from "@angular/forms";
import {SnackbarService} from "../snackbar.service";

@Component({
  selector: 'app-text-block-dialog',
  templateUrl: './create-text-block-dialog.component.html',
  styleUrls: ['./create-text-block-dialog.component.scss']
})
export class CreateTextBlockDialogComponent implements OnInit {

  createdTextBlockData = new FormGroup({
    name: new FormControl(),
    description: new FormControl(),
    content: new FormControl()
  });

  constructor(
    public dialog: MatDialogRef<CreateTextBlockDialogComponent>,
    private snackbar: SnackbarService
  ) {
  }

  ngOnInit(): void {
  }

  onCancel() {
    this.dialog.close();
    this.snackbar.openSnackbarSuccess("Erstellung des Textbausteins wurde abgebrochen.", "Ok");
  }

  onCreate() {
    this.dialog.close();
    this.snackbar.openSnackbarSuccess("Textbaustein wurde erstellt.", "Ok");

  }
}
