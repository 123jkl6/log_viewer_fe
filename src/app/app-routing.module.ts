import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SearchFormComponent } from "./search-form";
import { OtpFormComponent } from "./otp-form";
import { LogsFormComponent } from "./logs-form";
const routes: Routes = [
  { path: "", redirectTo: "/search", pathMatch: "full" },
  { path: "search", component: SearchFormComponent },
  { path: "otp", component: OtpFormComponent },
  { path: "logs", component: LogsFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
