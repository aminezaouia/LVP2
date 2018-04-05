import { Component, OnInit } from '@angular/core';
import { } from "";
import { DashboardGridsterConfigService } from './dashboard-gridster-config.service';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
@Component({
  selector: 'app-testdash',
  templateUrl: './testdash.component.html',
  styleUrls: ['./testdash.component.css']
})
export class TestdashComponent implements OnInit {

  config: GridsterConfig;
  constructor(private dashboardGridsterConfigService:DashboardGridsterConfigService  ) { }
items:Array<GridsterItem>;
  ngOnInit() {
  this.config=this.dashboardGridsterConfigService.getConfig();
  this.items=[
    {cols:1,rows:2},
    {cols:1,rows:1},
    {cols:1,rows:1},
    {cols:1,rows:1},
    {cols:1,rows:1},
    {cols:1,rows:1},
    {cols:1,rows:1},
    {cols:1,rows:1},
    {cols:1,rows:1},
    {cols:1,rows:1},
    {cols:1,rows:1}
  
  ]
  }


}
