import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";

import { SearchLogsRequest } from "../_models";

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
}
