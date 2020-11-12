import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { COMPOSITION_BUFFER_MODE, FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
  providers: [{ provide: COMPOSITION_BUFFER_MODE, useValue: true }]
})
export class AppModule {}
