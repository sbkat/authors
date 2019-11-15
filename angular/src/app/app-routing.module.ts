import { AddAuthorComponent } from './add-author/add-author.component';
import { AllAuthorsComponent } from './all-authors/all-authors.component';
import { EditAuthorComponent } from './edit-author/edit-author.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'add', component: AddAuthorComponent },
  { path: 'all', component: AllAuthorsComponent },
  { path: 'edit/:id', component: EditAuthorComponent },
  { path: '', pathMatch: 'full', redirectTo: '/all' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
