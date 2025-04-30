import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { RouterModule, RouterOutlet } from '@angular/router';
import { TableComponent } from './table/table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TableComponent,RouterModule,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent{ // implements OnInit {
  // employees: any[] = [];

  // constructor(private http: HttpClient) {}

  // ngOnInit() {
  //   this.http
  //     .get<any>('https://dummy.restapiexample.com/api/v1/employees')
  //     .subscribe((response) => {
  //       this.employees = response.data;
  //       console.log(this.employees);
        
  //     });
  // }
}
