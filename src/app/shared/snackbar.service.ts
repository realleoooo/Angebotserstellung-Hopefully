import {Injectable} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackbar: MatSnackBar) {
  }

  openSnackbarSuccess(message: string, action: string) {
    this.snackbar.open(message,
      action,
      {duration: 3000, panelClass: ['snack-bar-success']})
  }

  openSnackbarCancel(message: string, action: string) {
    this.snackbar.open(message,
      action,
      {duration: 3000, panelClass: ['snack-bar-cancel']})
  }
}
