import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { RegisterComponent } from './register/register.component';
import { ListsComponent } from './lists/lists.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'lists', component: ListsComponent},
  {path: 'lists/:id', component: ListComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
