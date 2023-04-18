import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ELibEditComponent } from './e-lib-edit/e-lib-edit.component';
import { ELibSystemAboutAddbookComponent } from './e-lib-system-about-addbook/e-lib-system-about-addbook.component';
import { ELibSystemAboutLibComponent } from './e-lib-system-about-lib/e-lib-system-about-lib.component';
import { ELibSystemAboutPriceCareComponent } from './e-lib-system-about-price-care/e-lib-system-about-price-care.component';
import { ELibSystemAboutRulesComponent } from './e-lib-system-about-rules/e-lib-system-about-rules.component';
import { ELibSystemLoginComponent } from './e-lib-system-login/e-lib-system-login.component';
import { ELibSystemRegisterComponent } from './e-lib-system-register/e-lib-system-register.component';
import { ELibSystemSearchBookComponent } from './e-lib-system-search-book/e-lib-system-search-book.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  // {
  //   path: 'home', component: AppComponent
  // },
  {
    path: 'AboutLib', component: ELibSystemAboutLibComponent
  },
  {
    path: 'Rules', component: ELibSystemAboutRulesComponent
  },
   {
    path: 'Register', component: ELibSystemRegisterComponent
  },
  {
    path: 'Price', component: ELibSystemAboutPriceCareComponent
  },
  {
    path: 'login', component: ELibSystemLoginComponent
  },
  {
    path: 'search', component: ELibSystemSearchBookComponent
  },
  {
    path: 'addbook', component: ELibSystemAboutAddbookComponent
  },
  {
    path: 'edit/:sId', component: ELibEditComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },{
    path:'**',component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
