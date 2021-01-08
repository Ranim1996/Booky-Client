import { BadRequestComponent } from './errors-handeling/bad-request/bad-request.component';
import { InternalServerErrorsComponent } from './errors-handeling/internal-server-errors/internal-server-errors.component';
import { NotFoundComponent } from './errors-handeling/not-found/not-found.component';
import { ForbiddenComponent } from './errors-handeling/forbidden/forbidden.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { FilterBooksComponent } from './book-posts/filter-books/filter-books.component';
import { FavoriteListComponent } from './favorite-list/favorite-list.component';
import { LogInComponent } from './log-in/log-in.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BookPostsComponent } from './book-posts/book-posts.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './Auth/auth.guard';
import { UnExpectedErrorComponent } from './errors-handeling/un-expected-error/un-expected-error.component';
import { OfflineErrorComponent } from './errors-handeling/offline-error/offline-error.component';

const routes: Routes = [
  {
    path: 'booky/profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'booky/posts', 
    component: BookPostsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'booky/statistics', 
    component: StatisticsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'booky/homePage', 
    component: HomePageComponent,
    canActivate: [AuthGuard]
  },
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
    path: 'booky/chatRoom', 
    component: ChatRoomComponent,
    canActivate: [AuthGuard]
  },
  {
		path: 'booky/forbidden',
		component: ForbiddenComponent,
  },
  {
		path: 'booky/not-found',
		component: NotFoundComponent,
  },
  {
		path: 'booky/server-errors',
		component: InternalServerErrorsComponent,
  },
  {
		path: 'booky/bad-request',
		component: BadRequestComponent,
  },
  {
		path: 'booky/unexpected-error',
		component: UnExpectedErrorComponent,
  },
  {
		path: 'booky/offline-error',
		component: OfflineErrorComponent,
	},
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
