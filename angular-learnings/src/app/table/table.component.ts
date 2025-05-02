import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { CheckIcon } from 'primeng/icons';
import { TableModule } from 'primeng/table';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-table',
  standalone: true,
  imports: [TableModule, CheckIcon, CommonModule, ScrollPanelModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent{
  // @Input() data: any[] = [];

  data = [
    {
      "id": 1,
      "employee_name": "Tiger Nixon",
      "employee_salary": 320800,
      "employee_age": 61,
      "profile_image": ""
    },
    {
      "id": 2,
      "employee_name": "Garrett Winters",
      "employee_salary": 170750,
      "employee_age": 63,
      "profile_image": ""
    },
    {
      "id": 3,
      "employee_name": "Ashton Cox",
      "employee_salary": 86000,
      "employee_age": 66,
      "profile_image": ""
    },
    {
      "id": 4,
      "employee_name": "Cedric Kelly",
      "employee_salary": 433060,
      "employee_age": 22,
      "profile_image": ""
    },
    {
      "id": 5,
      "employee_name": "Airi Satou",
      "employee_salary": 162700,
      "employee_age": 33,
      "profile_image": ""
    },
    {
      "id": 6,
      "employee_name": "Brielle Williamson",
      "employee_salary": 372000,
      "employee_age": 61,
      "profile_image": ""
    },
    {
      "id": 7,
      "employee_name": "Herrod Chandler",
      "employee_salary": 137500,
      "employee_age": 59,
      "profile_image": ""
    },
    {
      "id": 8,
      "employee_name": "Rhona Davidson",
      "employee_salary": 327900,
      "employee_age": 55,
      "profile_image": ""
    },
    {
      "id": 9,
      "employee_name": "Colleen Hurst",
      "employee_salary": 205500,
      "employee_age": 39,
      "profile_image": ""
    },
    {
      "id": 10,
      "employee_name": "Sonya Frost",
      "employee_salary": 103600,
      "employee_age": 23,
      "profile_image": ""
    },
    {
      "id": 11,
      "employee_name": "Jena Gaines",
      "employee_salary": 90560,
      "employee_age": 30,
      "profile_image": ""
    },
    {
      "id": 12,
      "employee_name": "Quinn Flynn",
      "employee_salary": 342000,
      "employee_age": 22,
      "profile_image": ""
    },
    {
      "id": 13,
      "employee_name": "Charde Marshall",
      "employee_salary": 470600,
      "employee_age": 36,
      "profile_image": ""
    },
    {
      "id": 14,
      "employee_name": "Haley Kennedy",
      "employee_salary": 313500,
      "employee_age": 43,
      "profile_image": ""
    },
    {
      "id": 15,
      "employee_name": "Tatyana Fitzpatrick",
      "employee_salary": 385750,
      "employee_age": 19,
      "profile_image": ""
    }
  ]
  

  // constructor(private http: HttpClient) {}

  // ngOnInit() {
  //   this.http
  //     .get<any>('https://dummy.restapiexample.com/api/v1/employees')
  //     .subscribe((response) => {
  //       this.data = response.data;
  //     });
  // }
}
//export class TableComponent {
// staffSkillset = [
//   {
//     team: 'Team A',
//     officer: 'WC1 Officer1',
//     role: 'S&E',
//     skill001: true,
//     skill002: false,
//     skill003: false,
//     skill004: false,
//     skill005: false,
//     skill006: false,
//   },
//   {
//     team: 'Team A',
//     officer: 'WC1 Officer2',
//     role: 'AC',
//     skill001: false,
//     skill002: false,
//     skill003: true,
//     skill004: false,
//     skill005: false,
//     skill006: false,
//   },
//   {
//     team: 'Team A',
//     officer: 'WC1 Officer3',
//     role: 'A&I',
//     skill001: false,
//     skill002: true,
//     skill003: false,
//     skill004: false,
//     skill005: false,
//     skill006: false,
//   },
//   {
//     team: 'Team A',
//     officer: 'WC1 Officer4',
//     role: 'SAC',
//     skill001: true,
//     skill002: false,
//     skill003: false,
//     skill004: true,
//     skill005: false,
//     skill006: false,
//   },
//   {
//     team: 'Team A',
//     officer: 'WC1 Officer5',
//     role: 'GL',
//     skill001: false,
//     skill002: false,
//     skill003: false,
//     skill004: false,
//     skill005: true,
//     skill006: false,
//   },
//   {
//     team: 'Team A',
//     officer: 'WC1 Officer6',
//     role: 'AC',
//     skill001: false,
//     skill002: false,
//     skill003: false,
//     skill004: false,
//     skill005: false,
//     skill006: true,
//   },
//   {
//     team: 'Team A',
//     officer: 'WC1 Officer7',
//     role: 'AC',
//     skill001: false,
//     skill002: true,
//     skill003: false,
//     skill004: false,
//     skill005: false,
//     skill006: false,
//   },
//   {
//     team: 'Team A',
//     officer: 'WC1 Officer8',
//     role: 'AC',
//     skill001: false,
//     skill002: false,
//     skill003: false,
//     skill004: false,
//     skill005: false,
//     skill006: false,
//   },
//];
//}
