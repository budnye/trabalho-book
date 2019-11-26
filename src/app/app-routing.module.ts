import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "home",
    loadChildren: () =>
      import("./pages/home/home.module").then(m => m.HomePageModule)
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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
