import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { TabsPage } from "./tabs.page";

const routes: Routes = [
  {
    path: "tabs",
    component: TabsPage,
    children: [
      {
        path: "main",
        loadChildren: "../main/main.module#MainPageModule"
      },
      {
        path: "search",
        loadChildren: "../search/search.module#SearchPageModule"
      },
      {
        path: "mybooks",
        loadChildren: "../mybooks/mybooks.module#MybooksPageModule"
      },
      {
        path: "favoritebooks",
        loadChildren:
          "../favoritebooks/favoritebooks.module#FavoritebooksPageModule"
      },
      {
        path: "reading",
        loadChildren: "../reading/reading.module#ReadingPageModule"
      }
    ]
  },
  {
    path: "",
    redirectTo: "/tabs/main",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
