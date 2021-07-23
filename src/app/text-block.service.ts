import {Injectable} from '@angular/core';
import {TextBlock} from "./textBlock/textBlock";
import {_MOCK_TEXT_BLOCK_TABLE_DATA} from "./textBlock/text-block-table/mockTextblockTableData";

@Injectable({
  providedIn: 'root'
})
export class TextBlockService {

  private _MockTextBlockTableData: TextBlock[] = _MOCK_TEXT_BLOCK_TABLE_DATA;

  constructor() {
  }

  createTextBlock(name: string,description: string, creator: string) {
    this._MockTextBlockTableData.push(
      {
        id: Math.max(...this.getMockTextBlockTableData().map(element => element.id)) + 1,
        name: name,
        description: description,
        creator: creator
      }
    );
  }

  getMockTextBlockTableData(): TextBlock[] {
    return this._MockTextBlockTableData;
  }
}
