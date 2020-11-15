import { RegisterComponent } from './register/register.component';
import { LogInComponent } from './log-in/log-in.component';
import { FilterUsersComponent } from './filter-users/filter-users.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BookPostsComponent } from './book-posts/book-posts.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: 'booky/users/:id/profile', 
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
  {
    path: 'booky/books/filter', 
    component: FilterUsersComponent
  },
  {
    path: 'booky/logIn', 
    component: LogInComponent
  },
  {
    path: 'booky/register', 
    component: RegisterComponent
  },
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
