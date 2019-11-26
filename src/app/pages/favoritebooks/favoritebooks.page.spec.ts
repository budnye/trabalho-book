import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritebooksPage } from './favoritebooks.page';

describe('FavoritebooksPage', () => {
  let component: FavoritebooksPage;
  let fixture: ComponentFixture<FavoritebooksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritebooksPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritebooksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
