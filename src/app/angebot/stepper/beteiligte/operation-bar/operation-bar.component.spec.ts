import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationBarComponent } from './operation-bar.component';

describe('BeteiligteButtonsComponent', () => {
  let component: OperationBarComponent;
  let fixture: ComponentFixture<OperationBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
