// Base angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// Angular Material Imports
import { MatToolbarModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material';
import { MatListModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatGridListModule } from '@angular/material';
import { MatTabsModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material';

// Artropy custom components
import { AppComponent } from './app.component';
import { ArtropyTopNavComponent } from './top-nav/top-nav.component';
import { ArtropyHomePageComponent } from './home-page/home-page.component';
import { OriginalsPageComponent } from './originals-page/originals-page.component';
import { StudiosPageComponent } from './studios-page/studios-page.component';
import { TrendingPageComponent } from './trending-page/trending-page.component';
import { MasterworksPageComponent } from './masterworks-page/masterworks-page.component';
import { ShopPageComponent } from './shop-page/shop-page.component';
import { LikedPageComponent } from './liked-page/liked-page.component';
import { HistoryPageComponent } from './history-page/history-page.component';
import { FollowingPageComponent } from './following-page/following-page.component';
import { ReimaginationsPageComponent } from './reimaginations-page/reimaginations-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { SponsersPageComponent } from './sponsers-page/sponsers-page.component';
import { FollowedPageComponent } from './followed-page/followed-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { VideosPageComponent } from './videos-page/videos-page.component';
import { LivePageComponent } from './live-page/live-page.component';
import { ImagePageComponent } from './image-page/image-page.component';
import { Http404PageComponent } from './http404-page/http404-page.component';
import { UploadPageComponent } from './upload-page/upload-page.component';

// Other libraries

// JQuery
import * as jquery from 'jquery';
// BOOTSTRAP4
import * as bootstrap from 'bootstrap';
// DROPZONE
import * as dropzone from 'dropzone';




const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: ArtropyHomePageComponent },
  { path: 'originals', component: OriginalsPageComponent },
  { path: 'studios', component: StudiosPageComponent },
  { path: 'trending', component: TrendingPageComponent },
  { path: 'masterworks', component: MasterworksPageComponent },
  { path: 'shop', component: ShopPageComponent },
  { path: 'liked', component: LikedPageComponent },
  { path: 'history', component: HistoryPageComponent },
  { path: 'following', component: FollowingPageComponent },
  { path: 'reimaginations', component: ReimaginationsPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'cart', component: CartPageComponent },
  { path: 'sponsers', component: SponsersPageComponent },
  { path: 'followed', component: FollowedPageComponent },
  { path: 'search', component: SearchPageComponent },
  { path: 'upload', component: UploadPageComponent },
  { path: 'image/:artist/:imageName', component: ImagePageComponent },
  { path: '**', component: Http404PageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ArtropyTopNavComponent,
    ArtropyHomePageComponent,
    OriginalsPageComponent,
    StudiosPageComponent,
    TrendingPageComponent,
    MasterworksPageComponent,
    ShopPageComponent,
    LikedPageComponent,
    HistoryPageComponent,
    FollowingPageComponent,
    ReimaginationsPageComponent,
    LoginPageComponent,
    CartPageComponent,
    SponsersPageComponent,
    FollowedPageComponent,
    SearchPageComponent,
    VideosPageComponent,
    LivePageComponent,
    ImagePageComponent,
    Http404PageComponent,
    UploadPageComponent,
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatExpansionModule,
    MatListModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    MatCardModule,
    MatGridListModule,
    MatTabsModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
