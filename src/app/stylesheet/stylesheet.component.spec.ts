import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StylesheetComponent } from './stylesheet.component';

describe('TestingComponent', () => {
  let component: StylesheetComponent;
  let fixture: ComponentFixture<StylesheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StylesheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StylesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
