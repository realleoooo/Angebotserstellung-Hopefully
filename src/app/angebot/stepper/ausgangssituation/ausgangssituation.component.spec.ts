import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AusgangssituationComponent } from './ausgangssituation.component';

describe('AusgangssituationComponent', () => {
  let component: AusgangssituationComponent;
  let fixture: ComponentFixture<AusgangssituationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AusgangssituationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AusgangssituationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
