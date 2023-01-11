import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root",
})

export class catfact{
    constructor(private http: HttpClient){

    }

    getFact():Observable<any> {
        return this.http.get("https://catfact.ninja/fact");
    }
    
    getAllFacts():Observable<any> {
        return this.http.get("https://catfact.ninja/facts");
    }

    getNthFacts(total:number):Observable<any> {
        return this.http.get("https://catfact.ninja/facts%Limit=" + total);
    }

}