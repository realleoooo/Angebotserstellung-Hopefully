import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvolvedPersonsComponent } from './involvedPersons.component';

describe('BeteiligteComponent', () => {
  let component: InvolvedPersonsComponent;
  let fixture: ComponentFixture<InvolvedPersonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvolvedPersonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvolvedPersonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
