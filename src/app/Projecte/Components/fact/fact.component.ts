import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { catfact } from '../../Services/api/clauApi';

@Component({
  selector: 'app-fact',
  templateUrl: './fact.component.html',
  styleUrls: ['./fact.component.css']
})

export class FactComponent {
  fact!: string;
  factNth!: Array<{fact:String, length:number}>;

  constructor(private httpClient: catfact) {
    console.log("Inici");

    this.httpClient.getFact().subscribe(
      data => {
        console.log("Dins subscribe");
        console.log(data);
        this.fact = data.fact;
      }
    );

    this.httpClient.getNthFacts(3).subscribe(
      response => {
        console.log("Dins subscribe");
        console.log(response);
        this.fact = response.data;
      }
    );
    
    this.httpClient.getAllFacts().subscribe(
      response => {
        console.log("Dins subscribe");
        console.log(response);
        this.fact = response.fact;
      }
    );

    console.log("final");
  }

}
