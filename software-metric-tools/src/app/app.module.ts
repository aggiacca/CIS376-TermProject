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
import { QsdiCalculatorComponent } from './qsdi-calculator/qsdi-calculator.component';
import { UsecasePointsCalculatorComponent } from './usecase-points-calculator/usecase-points-calculator.component';


const appRoutes: Routes = [
  { path: 'app', component: AppComponent, pathMatch: 'full' },
  { path: 'index', component: IndexComponent, pathMatch: 'full' },
  { path: 'function-points', component: FunctionPointsCalculatorComponent, pathMatch: 'full' },
  { path: 'cocomo-calculator', component: CocomoCalculatorComponent, pathMatch: 'full' },
  { path: 'qsdi-calculator', component: QsdiCalculatorComponent, pathMatch: 'full' },
  { path: 'usecase-points-calculator', component: UsecasePointsCalculatorComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,
    FunctionPointsCalculatorComponent,
    CocomoCalculatorComponent,
    QsdiCalculatorComponent,
    UsecasePointsCalculatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
