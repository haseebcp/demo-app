import { Component, OnInit } from '@angular/core';
import {DashboardService} from '../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public dashboarservice: DashboardService) { }
  users=[];
  ngOnInit() {
    this.dashboarservice.getData().subscribe(data => {
      console.log(data);
      this.users = data;
    });
  }

}
