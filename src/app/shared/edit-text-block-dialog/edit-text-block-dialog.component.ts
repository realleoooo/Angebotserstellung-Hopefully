import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup} from "@angular/forms";
import {SnackbarService} from "../snackbar.service";

@Component({
  selector: 'app-edit-text-block-dialog',
  templateUrl: './edit-text-block-dialog.component.html',
  styleUrls: ['./edit-text-block-dialog.component.scss']
})
export class EditTextBlockDialogComponent implements OnInit {

  editedTextBlockData = new FormGroup({
    editedTextBlockName: new FormControl(),
    editedTextBlockDescription: new FormControl(),
    editedTextBlockContent: new FormControl()
  });

  constructor(
    public dialog: MatDialogRef<EditTextBlockDialogComponent>,
    private snackbar: SnackbarService
  ) {
  }

  ngOnInit(): void {
  }

  onCancel() {
    this.dialog.close();
    this.snackbar.openSnackbarSuccess("Bearbeitung des Textbausteins wurde abgebrochen.", "Ok");
  }

  onDone() {
    this.dialog.close();
    this.snackbar.openSnackbarSuccess("Textbaustein wurde bearbeitet.", "Ok");

  }
}
