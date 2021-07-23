import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CreateTextBlockDialogComponent} from "../shared/create-text-block-dialog/create-text-block-dialog.component";
import {TextBlockService} from "../text-block.service";
import {TextBlock} from "./textBlock";

@Component({
  selector: 'app-textBlock',
  templateUrl: './textBlock.component.html',
  styleUrls: ['./textBlock.component.scss']
})
export class TextBlockComponent implements OnInit {

  constructor(private createTextBlockDialog: MatDialog,
              private textBlockService: TextBlockService) {
  }

  ngOnInit(): void {
  }

  createTextBlock() {
    const dialogData = this.createTextBlockDialog.open(CreateTextBlockDialogComponent, {
      width: '800px'
    });

    dialogData.afterClosed().subscribe((result: TextBlock) => {
      this.textBlockService.createTextBlock(
          result.name,
          result.description,
          result.creator)
      }
    );
  }
}
