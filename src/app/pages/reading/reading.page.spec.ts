import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingPage } from './reading.page';

describe('ReadingPage', () => {
  let component: ReadingPage;
  let fixture: ComponentFixture<ReadingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
