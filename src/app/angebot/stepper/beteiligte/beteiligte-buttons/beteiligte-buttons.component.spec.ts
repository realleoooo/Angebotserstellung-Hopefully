import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeteiligteButtonsComponent } from './beteiligte-buttons.component';

describe('BeteiligteButtonsComponent', () => {
  let component: BeteiligteButtonsComponent;
  let fixture: ComponentFixture<BeteiligteButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeteiligteButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeteiligteButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
