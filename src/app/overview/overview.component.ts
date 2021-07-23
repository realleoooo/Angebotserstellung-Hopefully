import {Component, OnInit} from '@angular/core';
import {DataBaseService} from "../dataBase.service";
import {OfferTitleDialogComponent} from "../shared/offerTitle-dialog/offerTitle-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {SnackbarService} from "../shared/snackbar.service";


@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  newId: number = Math.max(...this.dataBaseService.getMockTableData().map(element => element.id)) + 1;

  constructor(private dataBaseService: DataBaseService,
              private offerTitleDialog: MatDialog,
              private router: Router,
              private snackbar: SnackbarService) {
  }

  ngOnInit(): void {
  }

  addOffer() {
    let newId = this.newId;
    const dialogData = this.offerTitleDialog.open(OfferTitleDialogComponent, {
      width: '350px'
    });

    dialogData.afterClosed().subscribe(result => {
      if (result) {
        this.dataBaseService.addOffer(
          this.dataBaseService.getMockTableData().length,
          "", result, new Date().toISOString().slice(0, 10));
        this.router.navigate(["offer", newId]);
        this.snackbar.openSnackbarSuccess("Angebot " + result + " wurde erfolgreich erstellt.", "Ok")
      } else {
        this.snackbar.openSnackbarCancel("Angebot wurde nicht erstellt.", "Ok")
      }
    })
  }
}
