import { RegisterationComponent } from './registeration/registeration.component';
import { FilterBooksComponent } from './filter-books/filter-books.component';
import { MajorityComponent } from './majority/majority.component';
import { FavoriteListComponent } from './favorite-list/favorite-list.component';
import { LogInComponent } from './log-in/log-in.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BookPostsComponent } from './book-posts/book-posts.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './Auth/auth.guard';

const routes: Routes = [
  {
    path: 'booky/profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  // {
  //   path: 'booky/users/:id/profile', 
  //   component: ProfileComponent,
  // },
  {
    path: 'booky/posts', 
    component: BookPostsComponent,
    canActivate: [AuthGuard]
  },
  // {
  //   path: 'booky/users/:id/posts', 
  //   component: BookPostsComponent,
  // },
  {
    path: 'booky/homePage', 
    component: HomePageComponent,
    canActivate: [AuthGuard]
  },
  // {
  //   path: 'booky/users/:id/homePage', 
  //   component: HomePageComponent,
  // },
  {
    path: 'booky/books/filter', 
    component: FilterBooksComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'booky/logIn', 
    component: LogInComponent,
  },
  {
    path: 'booky/register', 
    component: RegisterationComponent,
  },
  {
    path: 'booky/MyList', 
    component: FavoriteListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'booky/Majority', 
    component: MajorityComponent,
    canActivate: [AuthGuard]
  },
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
