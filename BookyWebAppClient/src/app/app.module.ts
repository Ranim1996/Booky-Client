import { Users } from 'src/app/classes/Profile/Users';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatBadgeModule} from '@angular/material/badge';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTreeModule} from '@angular/material/tree';
import {OverlayModule} from '@angular/cdk/overlay';



import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';

import { A11yModule } from '@angular/cdk/a11y';
import { ProfileComponent } from './profile/profile.component';
import { BookPostsComponent } from './book-posts/book-posts.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DeletePostComponent } from './book-posts/delete-post/delete-post.component';
import { UpdatePostComponent } from './book-posts/update-post/update-post.component';
import { LogInComponent } from './log-in/log-in.component';
import { FavoriteListComponent } from './favorite-list/favorite-list.component';
import { RemoveFromMyListComponent } from './favorite-list/remove-from-my-list/remove-from-my-list.component';
import { FilterBooksComponent } from './book-posts/filter-books/filter-books.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { ForbiddenComponent } from './errors-handeling/forbidden/forbidden.component';
import { NotFoundComponent } from './errors-handeling/not-found/not-found.component';
import { InternalServerErrorsComponent } from './errors-handeling/internal-server-errors/internal-server-errors.component';
import { BadRequestComponent } from './errors-handeling/bad-request/bad-request.component';
import { UnExpectedErrorComponent } from './errors-handeling/un-expected-error/un-expected-error.component';
import { OfflineErrorComponent } from './errors-handeling/offline-error/offline-error.component';
import { ShowMoreInfoComponent } from './book-posts/filter-books/show-more-info/show-more-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    BookPostsComponent,
    HomePageComponent,
    DeletePostComponent,
    UpdatePostComponent,
    LogInComponent,
    FavoriteListComponent,
    RemoveFromMyListComponent,
    FilterBooksComponent,
    RegisterationComponent,
    StatisticsComponent,
    ChatRoomComponent,
    ForbiddenComponent,
    NotFoundComponent,
    InternalServerErrorsComponent,
    BadRequestComponent,
    UnExpectedErrorComponent,
    OfflineErrorComponent,
    ShowMoreInfoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    MatGridListModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    // MatAutocompleteModule,
    MatTabsModule,
    MatTooltipModule,
    MatBadgeModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    MatListModule,
    MatFormFieldModule,
    A11yModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatBottomSheetModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    MatTreeModule,
    OverlayModule,
    PortalModule,
    ScrollingModule
    ],
  providers: [
    FormsModule,
    // Users,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
