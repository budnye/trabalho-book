import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { FavoritebooksPage } from "./favoritebooks.page";

const routes: Routes = [
  {
    path: "",
    component: FavoritebooksPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FavoritebooksPage]
})
export class FavoritebooksPageModule {}
