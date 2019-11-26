import { Injectable } from "@angular/core";
import { Book } from "./book";

@Injectable({
  providedIn: "root"
})
export class ReadingService {
  private reading: Book[];
  constructor() {
    this.reading = [];
  }

  getBook() {
    return this.reading[this.reading.length - 1];
  }

  saveBook(book: Book) {
    this.reading = [];
    this.reading.push(book);
    console.log(this.reading);
  }
}
