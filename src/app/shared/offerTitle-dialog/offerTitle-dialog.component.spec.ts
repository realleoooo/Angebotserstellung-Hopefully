import { ComponentFixture, TestBed } from '@angular/core/testing';

import {OfferTitleDialogComponent} from './offerTitle-dialog.component';

describe('InputDialogComponent', () => {
  let component: OfferTitleDialogComponent;
  let fixture: ComponentFixture<OfferTitleDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferTitleDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferTitleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
