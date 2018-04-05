import {NgModule} from '@angular/core';

import {SmartadminModule} from '../../shared/smartadmin.module'

import {FlotChartModule} from "../../shared/graphs/flot-chart/flot-chart.module";
import {D3Module} from "../../shared/graphs/d3/d3.module";
import { Browser } from 'protractor';
import { TestdashComponent } from './testdash.component';
import { DashboardGridsterConfigService } from './dashboard-gridster-config.service';
import {TestdashRouting} from "./testdash.routing";
import { GridsterConfig, GridsterItem ,GridsterModule} from 'angular-gridster2';

@NgModule({
  imports: [
    SmartadminModule,
    TestdashRouting,
    FlotChartModule,
    D3Module,TestdashRouting
    ,GridsterModule
  ],
  declarations: [
TestdashComponent
  ],
  providers: [DashboardGridsterConfigService],
  bootstrap: [TestdashComponent],
    entryComponents: []
})
export class TestDashModule {

}
