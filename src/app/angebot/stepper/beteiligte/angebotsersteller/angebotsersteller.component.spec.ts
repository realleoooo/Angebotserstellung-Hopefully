import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngebotserstellerComponent } from './angebotsersteller.component';

describe('AngebotserstellerComponent', () => {
  let component: AngebotserstellerComponent;
  let fixture: ComponentFixture<AngebotserstellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngebotserstellerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngebotserstellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
