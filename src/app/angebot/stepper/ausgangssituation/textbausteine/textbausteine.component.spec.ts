import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextbausteineComponent } from './textbausteine.component';

describe('TextbausteineComponent', () => {
  let component: TextbausteineComponent;
  let fixture: ComponentFixture<TextbausteineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextbausteineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextbausteineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
