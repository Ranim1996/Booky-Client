import { HomePageComponent } from './home-page/home-page.component';
import { BookPostsComponent } from './book-posts/book-posts.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
    path: 'booky/users/:id/homePage', 
    component: HomePageComponent
  },
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
