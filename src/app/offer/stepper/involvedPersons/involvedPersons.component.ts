import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {DataBaseService} from "../../../dataBase.service";
import {Router} from "@angular/router";
import {SnackbarService} from "../../../shared/snackbar.service";
import {MatDialog} from "@angular/material/dialog";
import {ClearDialogComponent} from "../../../shared/clear-dialog/clear-dialog.component";

@Component({
  selector: 'app-involvedPersons',
  templateUrl: './involvedPersons.component.html',
  styleUrls: ['./involvedPersons.component.scss']
})
export class InvolvedPersonsComponent implements OnInit {

  involvedPersonsData = {
    customerData: new FormGroup({
      companyName: new FormControl(),
      department: new FormControl(),
      street: new FormControl(),
      postCode: new FormControl()
    }),
    creatorData: new FormGroup({
      name: new FormControl(),
      department: new FormControl(),
      telephone: new FormControl(),
      email: new FormControl()
    })
  };

  title = new FormControl();

  constructor(
    private dataBaseService: DataBaseService,
    private router: Router,
    private snackbar: SnackbarService,
    private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    let id = Number(this.router.url.split("/").pop());
    let data = this.dataBaseService.getMockTableData().find(element => element.id === id)!;
    this.involvedPersonsData.customerData.setValue({
      companyName: data.customerData?.companyName,
      department: data.customerData?.department,
      street: data.customerData?.street,
      postCode: data.customerData?.postCode
    });
    this.involvedPersonsData.creatorData.setValue({
      name: data.creatorData?.name,
      department: data.creatorData?.department,
      telephone: data.creatorData?.telephone,
      email: data.creatorData?.email
    });
    this.title.setValue(
      data.offerTitle
    )
  }

  correctOfferTitle(offerTitle: string) {
    let id = Number(this.router.url.split("/").pop());
    this.dataBaseService.correctOfferTitle(offerTitle, id);
    this.snackbar.openSnackbarSuccess("Angebotstitel wurde geändert.", "Ok");
  }

  save() {
    let id = Number(this.router.url.split("/").pop());
    this.dataBaseService.saveInvolvedPersons(
      this.involvedPersonsData.customerData.value,
      this.involvedPersonsData.creatorData.value,
      id
    )
    this.snackbar.openSnackbarSuccess("Angebot wurde erfolgreich gespeichert.", "Ok");
  }

  clear() {
    this.dialog.open(ClearDialogComponent, {
      width: '600px'
    }).afterClosed().subscribe(element => {
      if (element) {
        this.save();
      }
      this.dataBaseService.quitStepper();
    })
  }
}
