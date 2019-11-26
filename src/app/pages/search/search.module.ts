import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { BookMainComponent } from "../../components/book-main/book-main.component";
import { BookItemComponent } from "../../components/book-item/book-item.component";

import { IonicModule } from "@ionic/angular";

import { SearchPage } from "./search.page";

const routes: Routes = [
  {
    path: "",
    component: SearchPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SearchPage, BookMainComponent, BookItemComponent]
})
export class SearchPageModule {}
