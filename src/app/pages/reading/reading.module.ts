import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { ReadingPage } from "./reading.page";
import { ReadingDisplayComponent } from "../../components/reading-display/reading-display.component";

const routes: Routes = [
  {
    path: "",
    component: ReadingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReadingPage, ReadingDisplayComponent]
})
export class ReadingPageModule {}
