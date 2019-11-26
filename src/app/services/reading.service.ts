import { Injectable } from "@angular/core";
import { Book } from "./book";

@Injectable({
  providedIn: "root"
})
export class ReadingService {
  private readingList: Book[];
  constructor() {
    this.readingList = [];
  }

  getList() {
    return this.readingList;
  }

  getBook(id: string) {
    return this.readingList.find(b => b.id === id);
  }

  saveBook(book: Book) {
    this.readingList.unshift(book);
  }

  removeBook(id: string) {
    for (let i = 0; i < this.readingList.length; i++) {
      if (this.readingList[i].id === id) {
        this.readingList.splice(i, 1);
        i--;
      }
    }
  }
}
