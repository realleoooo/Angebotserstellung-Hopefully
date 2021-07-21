import {Component, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-kunde',
  templateUrl: './kunde.component.html',
  styleUrls: ['./kunde.component.scss']
})
export class KundeComponent implements OnInit {
  // @Output() kundeWurdeGespeichert =

  kundenData = new FormGroup({
    unternehmensname: new FormControl(),
    abteilung: new FormControl(),
    strasse: new FormControl(),
    plz: new FormControl()
  })


  constructor() {
  }

  ngOnInit(): void {
  }


}
