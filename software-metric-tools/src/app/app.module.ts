import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IndexComponent } from './index/index.component';
import {RouterModule, Routes} from "@angular/router";
import { FunctionPointsCalculatorComponent } from './function-points-calculator/function-points-calculator.component';
import {FormsModule} from "@angular/forms";


const appRoutes: Routes = [
  { path: 'app', component: AppComponent, pathMatch: 'full' },
  { path: 'index', component: IndexComponent, pathMatch: 'full' },
  { path: 'function-points', component: FunctionPointsCalculatorComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,
    FunctionPointsCalculatorComponent
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
