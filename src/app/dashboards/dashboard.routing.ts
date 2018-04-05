import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule} from '@angular/router';


export const routes: Routes = [
  {
    path: '', redirectTo: 'testdash', pathMatch: 'full'
  },
  {
    path: 'testdash',
    loadChildren:'./testdash/testdash.module#TestDashModule',
    
   // loadChildren:'./+add/add.module#AddModule',

  }
];

export const routing = RouterModule.forChild(routes);
