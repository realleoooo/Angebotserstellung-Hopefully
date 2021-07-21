import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-operation-bar',
  templateUrl: './operation-bar.component.html',
  styleUrls: ['./operation-bar.component.scss']
})
export class OperationBarComponent implements OnInit {
  @Output() saveButton = new EventEmitter<null>();

  constructor() {
  }

  ngOnInit(): void {
  }

}
