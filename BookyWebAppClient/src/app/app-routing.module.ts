import { BookPostsComponent } from './book-posts/book-posts.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: 'booky/users/:id', 
    component: ProfileComponent
  },
  {
    path: 'booky/users/:id/posts', 
    component: BookPostsComponent
  },
  {
    path: 'booky/users/:id/home', 
    component: HomeComponent
  },
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
