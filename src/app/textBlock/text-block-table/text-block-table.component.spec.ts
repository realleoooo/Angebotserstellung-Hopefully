import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBlockTableComponent } from './text-block-table.component';

describe('TextBlockTableComponent', () => {
  let component: TextBlockTableComponent;
  let fixture: ComponentFixture<TextBlockTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextBlockTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextBlockTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
