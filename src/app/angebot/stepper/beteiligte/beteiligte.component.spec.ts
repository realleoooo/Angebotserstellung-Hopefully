import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeteiligteComponent } from './beteiligte.component';

describe('BeteiligteComponent', () => {
  let component: BeteiligteComponent;
  let fixture: ComponentFixture<BeteiligteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeteiligteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeteiligteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
