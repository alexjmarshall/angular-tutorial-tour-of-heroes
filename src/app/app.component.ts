import { Component } from '@angular/core';
import { NgxSoapService, Client, ISoapMethodResponse } from 'ngx-soap';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { getTestBed } from '@angular/core/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  message;
  client: Client;
  testID = '1';
  AuthenticationToken ={
    username: 'nait1',
    password: 'u6q7E4wO',
    portalID: '1'
  };

  getTest(): void {
    const body = {
      AuthenticationToken: this.AuthenticationToken,
      testID: this.testID
    };
    (<any>this.client).GetTest(body).subscribe((res: ISoapMethodResponse) =>
    this.message = res.result.AddResult);
  }

    constructor(private soap: NgxSoapService) {
        this.soap.createClient('http://ptp.psychometrics.com/ws1/psyws.wsdl').then(client => this.client = client);
        //this.getTest();
    }

}

