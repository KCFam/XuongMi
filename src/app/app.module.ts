import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LayoutMainComponent } from "./_layout/main/_main.component";
import { LayoutHeaderComponent } from "./_layout/header/_header.component";
import { LayoutNavMenuComponent } from "./_layout/nav-menu/_nav-menu.component";
import { LayoutFooterComponent } from "./_layout/footer/_footer.component";

import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    LayoutMainComponent,
    LayoutHeaderComponent,
    LayoutNavMenuComponent,
    LayoutFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
