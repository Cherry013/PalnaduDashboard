import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  
  Right = "fa-solid fa-arrow-right";
  Today_reports = "0"
  Total_reports = "0"
  Username = ""
  Begging = "0";
  Hotels = "0";
  pvt = "0";
  rail = "0";
  brick = "0";
  Factories = "0";
  Construction = "0";
  other = "0";


  constructor() { }

  ngOnInit(): void {
  }

}
