import { Injectable } from "@angular/core";
import { Book } from "../components/book-item/book";

@Injectable({
  providedIn: "root"
})
export class MyFavoriteService {
  private bookList: Book[];
  constructor() {
    this.bookList = [];
  }

  getList() {
    return this.bookList;
  }

  saveBook(book: Book) {
    this.bookList.push(book);
  }

  getBook(id: string) {
    let result = this.bookList.find(b => b.id === id);
    return result;
  }
  removeBook(id: string) {
    for (let i = 0; i < this.bookList.length; i++) {
      if (this.bookList[i].id === id) {
        this.bookList.splice(i, 1);
        i--;
      }
    }
  }
}
