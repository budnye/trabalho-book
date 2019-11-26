import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { MybooksPage } from "./mybooks.page";
import { BookListComponent } from "../../components/book-list/book-list.component";

const routes: Routes = [
  {
    path: "",
    component: MybooksPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MybooksPage, BookListComponent]
})
export class MybooksPageModule {}
