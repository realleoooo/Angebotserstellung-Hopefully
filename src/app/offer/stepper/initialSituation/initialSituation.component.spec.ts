import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialSituationComponent } from './initialSituation.component';

describe('AusgangssituationComponent', () => {
  let component: InitialSituationComponent;
  let fixture: ComponentFixture<InitialSituationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitialSituationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialSituationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
