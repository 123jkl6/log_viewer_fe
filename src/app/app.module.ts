import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { MatSelectModule } from "@angular/material/select";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { OtpFormComponent } from "./otp-form/otp-form.component";
import { SearchFormComponent } from "./search-form/search-form.component";
import { LogsFormComponent } from "./logs-form/logs-form.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    OtpFormComponent,
    SearchFormComponent,
    LogsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
