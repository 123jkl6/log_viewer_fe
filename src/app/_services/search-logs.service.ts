import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";

import { SearchLogsRequest, OneRowLogs } from "../_models";
import { formatDate } from "@angular/common";

@Injectable({
  providedIn: "root"
})
export class SearchLogsService {
  private LOGS_URI = "http://localhost:8080/logs/";

  constructor(private _http: HttpClient) {}

  public getServiceNames() {
    const resourceEP = this.LOGS_URI + "services";
    return this._http.get<string[]>(resourceEP);
  }

  public searchLogs(slr: SearchLogsRequest, envName: string) {
    console.log("service searchLogs : " + slr.date);
    console.log("service searchLogs : " + envName);
    return this._http.post<string[]>(this.LOGS_URI + envName + "/search", slr);
  }

  public processLogs(logsList: string[]): OneRowLogs[] {
    return logsList.map(oneLogs => {
      let fileNameArr = oneLogs.split("_");

      let dateTimeArr = fileNameArr[0].split("T");
      let time = dateTimeArr[1];
      let date =
        dateTimeArr[0].slice(0, 4) +
        "/" +
        dateTimeArr[0].slice(4, 6) +
        "/" +
        dateTimeArr[0].slice(6, 8);
      //let date = dateTimeArr[0];
      let username = "";
      if (fileNameArr.length == 4) {
        username = fileNameArr[2];
      }
      //in Javascript, splitting by just a dot is ok.
      let serviceName = fileNameArr[fileNameArr.length - 1].split(".")[0];

      let txnReferenceNumber = fileNameArr[1];

      return {
        date: date,
        time: time,
        username: username,
        serviceName: serviceName,
        txnReferenceNumber: txnReferenceNumber,
        fileName: oneLogs
      };
    });
  }
}
