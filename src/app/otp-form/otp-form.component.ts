import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { OneRowLogs } from "../_models";
import { SearchLogsService } from "../_services";

@Component({
  selector: "app-otp-form",
  templateUrl: "./otp-form.component.html",
  styleUrls: ["./otp-form.component.css"]
})
export class OtpFormComponent implements OnInit {
  searchOTPForm: FormGroup;
  results: OneRowLogs[] = [];

  constructor(
    private sls: SearchLogsService,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.searchOTPForm = this._formBuilder.group({
      envName: "UAT1",
      date: null,
      username: null,
      opaque: null,
      txnReferenceNumber: null
    });
  }

  searchOtp() {
    console.log("Submit form.");
    console.log(this.searchOTPForm.value);
    console.log("Form is valid :  " + !this.searchOTPForm.invalid);

    if (!this.searchOTPForm.invalid) {
      let serviceName = null;

      const searchLogsRequest = {
        date: this.searchOTPForm.controls["date"].value,
        txnReferenceNumber: this.searchOTPForm.controls["txnReferenceNumber"]
          .value,
        username: this.searchOTPForm.controls["username"].value,
        serviceName: serviceName,
        opaque: this.searchOTPForm.controls["opaque"].value
      };
      console.log(searchLogsRequest);
      this.sls
        .searchOtp(
          searchLogsRequest,
          this.searchOTPForm.controls["envName"].value
        )
        .subscribe({
          next: data => {
            this.results = this.sls.processLogs(
              data,
              this.searchOTPForm.controls["envName"].value
            );
            console.log(this.results);
          },
          error: err => {
            console.log(err);
          },
          complete: () => {
            console.log("Finished searching otp.");
          }
        });
    }
  }
}
