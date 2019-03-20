import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { CommonModule } from '@angular/common'

import { DashboardComponent } from './dashboard/dashboard.component'
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component'

const routes: Routes = [
  //default route
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
    // The method is called forRoot() because you configure the router at the application's root level
    // CommonModule
  ],
  exports: [RouterModule]

  // declarations:[]
})
export class AppRoutingModule { }