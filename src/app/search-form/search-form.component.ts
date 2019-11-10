import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
//import { formatDate } from "@angular/common";
//import { DatePipe } from "@angular/common";

import { SearchLogsService } from "../_services";
import { OneRowLogs } from "../_models";

@Component({
  selector: "app-search-form",
  templateUrl: "./search-form.component.html",
  styleUrls: ["./search-form.component.css"]
})
export class SearchFormComponent implements OnInit {
  searchLogsForm: FormGroup;
  serviceNames: string[] = ["login1FA", "login2FASMS"];
  results: OneRowLogs[] = [];

  constructor(
    private sls: SearchLogsService,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.searchLogsForm = this._formBuilder.group({
      envName: "UAT1",
      date: null,
      username: null,
      serviceName: null,
      txnReferenceNumber: null
    });

    this.sls.getServiceNames().subscribe({
      next: data => {
        this.serviceNames = data;
        this.serviceNames.splice(0, 0, "All");
        console.log(this.serviceNames);
      },
      error: err => {
        console.log(err);
      },
      complete: () => {
        console.log("Retrived service names.");
      }
    });
  }

  searchLogs() {
    console.log("Submit form.");
    console.log(this.searchLogsForm.value);

    //format date
    //const format = "yyyy-MM-dd";
    //const locale = "en-US";
    //let pipe = new DatePipe("en-US");

    let serviceName =
      this.searchLogsForm.controls["serviceName"].value == "All"
        ? null
        : this.searchLogsForm.controls["serviceName"].value;

    const searchLogsRequest = {
      date: this.searchLogsForm.controls["date"].value,
      txnReferenceNumber: this.searchLogsForm.controls["txnReferenceNumber"]
        .value,
      username: this.searchLogsForm.controls["username"].value,
      serviceName: serviceName
    };
    console.log(searchLogsRequest);
    this.sls
      .searchLogs(
        searchLogsRequest,
        this.searchLogsForm.controls["envName"].value
      )
      .subscribe({
        next: data => {
          this.results = this.sls.processLogs(data);
          console.log(this.results);
        },
        error: err => {
          console.log(err);
        },
        complete: () => {
          console.log("Finished searching logs.");
        }
      });
  }
}
