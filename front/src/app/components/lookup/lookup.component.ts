import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lookup',
  templateUrl: './lookup.component.html',
  styleUrls: ['./lookup.component.scss']
})
export class LookupComponent implements OnInit {

  constructor(private http: HttpClient) { }

  public baseUrl = 'https://po-sample-api.herokuapp.com/v1/heroes/';
  public email = "";

  ngOnInit(): void {
  }

  escolhe(event: string){
    console.log(event);
    this.getDados(event).subscribe((res: any) => {
      console.log(res)
      this.email = res.email;
    });


  }

  public getDados(hero: string) {
    return this.http.get(`${this.baseUrl}${hero}`);
  }

}
