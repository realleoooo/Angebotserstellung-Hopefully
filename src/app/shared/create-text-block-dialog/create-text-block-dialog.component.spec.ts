import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTextBlockDialogComponent } from './create-text-block-dialog.component';

describe('TextBlockDialogComponent', () => {
  let component: CreateTextBlockDialogComponent;
  let fixture: ComponentFixture<CreateTextBlockDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTextBlockDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTextBlockDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
