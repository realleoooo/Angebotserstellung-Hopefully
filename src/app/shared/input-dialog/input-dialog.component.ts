import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-input-dialog',
  templateUrl: './input-dialog.component.html',
  styleUrls: ['./input-dialog.component.scss']
})
export class InputDialogComponent implements OnInit {

  constructor(public dialogData: MatDialogRef<InputDialogComponent>) { }

  onNoClick(): void {
    this.dialogData.close();
  }

  ngOnInit(): void {
  }

}
