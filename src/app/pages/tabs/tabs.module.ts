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
        loadChildren: "./pages/main/main.module#MainPageModule"
      },
      {
        path: "search",
        loadChildren: "./pages/search/search.module#SearchPageModule"
      },
      {
        path: "mybooks",
        loadChildren: "./pages/mybooks/mybooks.module#MybooksPageModule"
      },
      {
        path: "favoritebooks",
        loadChildren:
          "./pages/favoritebooks/favoritebooks.module#FavoritebooksPageModule"
      },
      {
        path: "reading",
        loadChildren: "./pages/reading/reading.module#ReadingPageModule"
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
