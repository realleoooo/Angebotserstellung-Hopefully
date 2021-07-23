import {Component, OnInit} from '@angular/core';
import {Offer} from "./offer";
import {DataBaseService} from "../../dataBase.service";
import {MatTableDataSource} from "@angular/material/table";
import {Router} from "@angular/router";
import {SnackbarService} from "../../shared/snackbar.service";

@Component({
  selector: 'app-overview-table',
  templateUrl: './overview-table.component.html',
  styleUrls: ['./overview-table.component.scss']
})
export class OverviewTableComponent implements OnInit {
  displayedColumns: string[] = ['customer', 'offerTitle', 'creationDate', 'operation'];
  dataSource : MatTableDataSource<Offer> = new MatTableDataSource(this.dataBaseService.getMockTableData());

  constructor(
    private dataBaseService: DataBaseService,
    private router: Router,
    private snackbar: SnackbarService
    ) {
  }

  ngOnInit(): void {
    let id = Number(this.router.url.split("/").pop());
    let data = this.dataBaseService.getMockTableData().find(element => element.id === id)!;
  }

  deleteData(offer: Offer) {
    this.dataBaseService.deleteData(offer);
    this.dataSource = new MatTableDataSource(this.dataBaseService.getMockTableData());
    this.snackbar.openSnackbarSuccess("Angebot " + offer.offerTitle + " wurde erfolgreich gelöscht.", "Ok");
  }

  copyOffer(offer: Offer) {
    this.dataBaseService.copyOffer(offer, offer.offerTitle, offer.creationDate, offer.customerData, offer.creatorData);
    this.dataSource = new MatTableDataSource(this.dataBaseService.getMockTableData());
    this.snackbar.openSnackbarSuccess("Angebot " + offer.offerTitle + " wurde erfolgreich kopiert.", "Ok");
  }
}
