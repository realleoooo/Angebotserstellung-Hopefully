import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {DataBaseService} from "../../dataBase.service";

@Component({
  selector: 'app-clear-dialog',
  templateUrl: './clear-dialog.component.html',
  styleUrls: ['./clear-dialog.component.scss']
})
export class ClearDialogComponent implements OnInit {

  constructor(public dialogData: MatDialogRef<ClearDialogComponent>,
              private datenbankService: DataBaseService) {
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.datenbankService.quitStepper();
    this.dialogData.close(false);
  }

  onYesClick() {

    this.dialogData.close(true);
  }
}
