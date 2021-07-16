import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BausteineComponent } from './bausteine.component';

describe('BausteineComponent', () => {
  let component: BausteineComponent;
  let fixture: ComponentFixture<BausteineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BausteineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BausteineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
