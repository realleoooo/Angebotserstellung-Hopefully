import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTextBlockDialogComponent } from './edit-text-block-dialog.component';

describe('EditTextBlockDialogComponent', () => {
  let component: EditTextBlockDialogComponent;
  let fixture: ComponentFixture<EditTextBlockDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTextBlockDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTextBlockDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
