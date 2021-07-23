import {Component, OnInit, ViewChild} from '@angular/core';
import {StepperComponent} from "./stepper/stepper.component";

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {


  @ViewChild('child') child!: StepperComponent;

  constructor() {
  }

  ngOnInit(): void {
  }
}
