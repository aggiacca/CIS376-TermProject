import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IndexComponent } from './index/index.component';
import {RouterModule, Routes} from "@angular/router";
import { FunctionPointsCalculatorComponent } from './function-points-calculator/function-points-calculator.component';
import {FormsModule} from "@angular/forms";
import { CocomoCalculatorComponent } from './cocomo-calculator/cocomo-calculator.component';
import { DsqiCalculatorComponent } from './dsqi/dsqi-calculator.component';
import { UsecasePointsCalculatorComponent } from './usecase-points-calculator/usecase-points-calculator.component';
import { ToolsListComponent } from './tools-list/tools-list.component';
import {FunctionPointsService} from "./services/function-points-service";


const appRoutes: Routes = [
  { path: '', component: IndexComponent, pathMatch: 'full' },
  { path: 'tools-list', component: ToolsListComponent, pathMatch: 'full' },
  { path: 'app', component: AppComponent, pathMatch: 'full' },
  { path: 'index', component: IndexComponent, pathMatch: 'full' },
  { path: 'function-points', component: FunctionPointsCalculatorComponent, pathMatch: 'full' },
  { path: 'cocomo-calculator', component: CocomoCalculatorComponent, pathMatch: 'full' },
  { path: 'dsqi-calculator', component: DsqiCalculatorComponent, pathMatch: 'full' },
  { path: 'usecase-points-calculator', component: UsecasePointsCalculatorComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,
    FunctionPointsCalculatorComponent,
    CocomoCalculatorComponent,
    DsqiCalculatorComponent,
    UsecasePointsCalculatorComponent,
    ToolsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FunctionPointsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
