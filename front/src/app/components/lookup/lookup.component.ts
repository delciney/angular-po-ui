import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-lookup',
  templateUrl: './lookup.component.html',
  styleUrls: ['./lookup.component.scss']
})
export class LookupComponent implements OnInit {
  public form: FormGroup;
  public baseUrl = "https://po-sample-api.herokuapp.com/v1/heroes/";

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    ) {
    this.form = this.fb.group({
      email: ['']
    });
   }


  ngOnInit(): void {
  }

  escolhe(event: string){
    this.getDados(event).subscribe((res: any) => {
      this.form.controls.email.setValue(res.email);
    });


  }

  public getDados(hero: string) {
    return this.http.get(`${this.baseUrl}${hero}`);
  }

}
