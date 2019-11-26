import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MybooksPage } from "./mybooks.page";
import { BookListComponent } from "../../components/book-list/book-list.component";

describe("MybooksPage", () => {
  let component: MybooksPage;
  let fixture: ComponentFixture<MybooksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MybooksPage, BookListComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MybooksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
