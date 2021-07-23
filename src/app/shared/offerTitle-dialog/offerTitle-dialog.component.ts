import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-input-dialog',
  templateUrl: './offerTitle-dialog.component.html',
  styleUrls: ['./offerTitle-dialog.component.scss']
})
export class OfferTitleDialogComponent implements OnInit {

  constructor(public dialog: MatDialogRef<OfferTitleDialogComponent>) {
  }

  ngOnInit(): void {
  }

  onCancel(): void {
    this.dialog.close();
  }
}
