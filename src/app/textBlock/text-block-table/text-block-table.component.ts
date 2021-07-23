import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {TextBlock} from "../textBlock";
import {_MOCK_TEXT_BLOCK_TABLE_DATA} from "./mockTextblockTableData";
import {MatDialog} from "@angular/material/dialog";
import {EditTextBlockDialogComponent} from "../../shared/edit-text-block-dialog/edit-text-block-dialog.component";

@Component({
  selector: 'app-text-block-table',
  templateUrl: './text-block-table.component.html',
  styleUrls: ['./text-block-table.component.scss']
})
export class TextBlockTableComponent implements OnInit {

  displayedColumns: string[] = ['name', 'description', 'creator', 'operation'];

  dataSource: MatTableDataSource<TextBlock> = new MatTableDataSource(_MOCK_TEXT_BLOCK_TABLE_DATA);

  constructor(private editTextBlockDialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  editTextBlock() {
    this.editTextBlockDialog.open(EditTextBlockDialogComponent, {
      width: '800px'
    });
  }
}
