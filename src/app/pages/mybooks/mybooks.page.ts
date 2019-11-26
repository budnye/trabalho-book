import { Component, OnInit } from "@angular/core";
import { Book } from "src/app/components/book-item/book";
import { MyBooksService } from "../../services/my-books.service";

@Component({
  selector: "app-mybooks",
  templateUrl: "./mybooks.page.html",
  styleUrls: ["./mybooks.page.scss"]
})
export class MybooksPage implements OnInit {
  private list: Book[];
  constructor(private myBookService: MyBooksService) {
    this.list = myBookService.getList();
  }
  ngOnInit() {}
}
