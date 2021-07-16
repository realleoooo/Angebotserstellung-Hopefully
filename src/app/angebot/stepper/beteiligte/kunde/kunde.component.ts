import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-kunde',
  templateUrl: './kunde.component.html',
  styleUrls: ['./kunde.component.scss']
})
export class KundeComponent implements OnInit {
  unternehmensname: FormControl = new FormControl();
  abteilung: FormControl = new FormControl();
  strasse: FormControl = new FormControl();
  plz: FormControl = new FormControl();

  constructor() { }

  ngOnInit(): void {
  }


  save(value: any) {

  }
}
