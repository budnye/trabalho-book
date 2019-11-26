import { Book } from "../../services/book";

describe("Book", () => {
  it("should create an instance", () => {
    expect(new Book()).toBeTruthy();
  });
});
