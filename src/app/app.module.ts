import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ELibSystemRegisterComponent } from './e-lib-system-register/e-lib-system-register.component';
import { ELibSystemLoginComponent } from './e-lib-system-login/e-lib-system-login.component';
import { ELibSystemSearchBookComponent } from './e-lib-system-search-book/e-lib-system-search-book.component';
import { ELibSystemAboutLibComponent } from './e-lib-system-about-lib/e-lib-system-about-lib.component';
import { ELibSystemAboutRulesComponent } from './e-lib-system-about-rules/e-lib-system-about-rules.component';
import { ELibSystemAboutAddbookComponent } from './e-lib-system-about-addbook/e-lib-system-about-addbook.component';
import { ELibSystemAboutPriceCareComponent } from './e-lib-system-about-price-care/e-lib-system-about-price-care.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {} from "ngx-bootstrap";
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
// import { AuthGuard } from './auth.guard';
import{HttpClientModule} from '@angular/common/http';
import { ELibEditComponent } from './e-lib-edit/e-lib-edit.component';
@NgModule({
  declarations: [
    AppComponent,
    ELibSystemRegisterComponent,
    ELibSystemLoginComponent,
    ELibSystemSearchBookComponent,
    ELibSystemAboutLibComponent,
    ELibSystemAboutRulesComponent,
    ELibSystemAboutAddbookComponent,
    ELibSystemAboutPriceCareComponent,
    PageNotFoundComponent,
    ELibEditComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
     ReactiveFormsModule,
     HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
