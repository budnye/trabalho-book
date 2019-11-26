import { Component, OnInit, Input } from "@angular/core";
import { Book } from "src/app/services/book";
import { ReadingService } from "../../services/reading.service";

@Component({
  selector: "app-reading-display",
  templateUrl: "./reading-display.component.html",
  styleUrls: ["./reading-display.component.scss"]
})
export class ReadingDisplayComponent implements OnInit {
  list: Book[];
  imgLoaded: boolean;
  constructor(private readingService: ReadingService) {
    this.list = readingService.getList();
  }

  removeBook(book: Book) {
    this.readingService.removeBook(book.id);
  }

  ngOnInit() {}
}
