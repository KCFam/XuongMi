import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutMainComponent } from "./_layout/main/_main.component";

const routes: Routes = [
  { path: "main", component: LayoutMainComponent },
  { path: "", redirectTo: "main", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
