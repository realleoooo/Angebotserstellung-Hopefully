import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {InvolvedPersonsComponent} from "./involvedPersons/involvedPersons.component";

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {
  isLinear = false;
  @ViewChild(InvolvedPersonsComponent) child!: InvolvedPersonsComponent;

  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
  }

  save() {
    this.child.save();
  }

}
