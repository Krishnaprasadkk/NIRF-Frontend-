import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';
// import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HttpClient } from '@angular/common/http';
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { IntakeComponent } from './components/intake/intake.component';
// import { FinanceComponent } from './components/finance/finance.component';
// import { PhdComponent } from './components/phd/phd.component';
// import { UgPgComponent } from './components/ug-pg/ug-pg.component';
// import { ResearchComponent } from './components/research/research.component';
// import { PcsComponent } from './components/pcs/pcs.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {MatButtonModule} from  '@angular/material/button' ;
// import { MatTabsModule } from '@angular/material/tabs';
// import {MatFormField} from '@angular/material/form-field';
// import {FormsModule,ReactiveFormsModule,FormBuilder, FormGroup, Validators} from '@angular/forms';
// import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
// import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
// import {MatToolbarModule} from '@angular/material/toolbar';
// import {MatFormFieldModule} from '@angular/material/form-field';
// import { MatRadioModule } from '@angular/material/radio';
// import { ExcelComponent } from './components/excel/excel.component';
// import { CompareComponent } from './components/compare/compare.component';
// import {MatSidenavModule} from '@angular/material/sidenav';
// import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';


import { NgScrollbarModule } from 'ngx-scrollbar';

// Import routing module
import { AppRoutingModule } from './app-routing.module';

// Import app component
import { AppComponent } from './app.component';

// Import containers
import { DefaultFooterComponent, DefaultHeaderComponent, DefaultLayoutComponent } from './containers';

import {
  AvatarModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FooterModule,
  FormModule,
  GridModule,
  HeaderModule,
  ListGroupModule,
  NavModule,
  ProgressModule,
  SharedModule,
  SidebarModule,
  TabsModule,
  UtilitiesModule,

} from '@coreui/angular';

import { IconModule, IconSetService } from '@coreui/icons-angular';
// import { Outreach2Module } from './views/outreach2/outreach2.module';
// import { WDComponent } from './views/outreach/wd1/wd.component';


const APP_CONTAINERS = [
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent
];

@NgModule({
  declarations: [AppComponent, ...APP_CONTAINERS],
  imports: [FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AvatarModule,
    BreadcrumbModule,
    FooterModule,
    DropdownModule,
    GridModule,
    HeaderModule,
    SidebarModule,
    IconModule,
    NavModule,
    ButtonModule,
    FormModule,
    UtilitiesModule,
    ButtonGroupModule,
    ReactiveFormsModule,
    SidebarModule,
    SharedModule,
    TabsModule,
    ListGroupModule,
    ProgressModule,
    BadgeModule,
    ListGroupModule,
    CardModule,
    NgScrollbarModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    IconSetService,
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
