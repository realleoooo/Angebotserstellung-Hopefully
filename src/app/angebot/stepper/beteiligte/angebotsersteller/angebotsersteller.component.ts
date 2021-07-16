import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-angebotsersteller',
  templateUrl: './angebotsersteller.component.html',
  styleUrls: ['./angebotsersteller.component.scss']
})
export class AngebotserstellerComponent implements OnInit {
  name: FormControl = new FormControl();
  abteilung: FormControl = new FormControl();
  telefon: FormControl = new FormControl();
  email: FormControl = new FormControl();

  constructor() { }

  ngOnInit(): void {
  }

  save(value: any) {

  }
}
