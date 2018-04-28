// Base angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MockBackend } from '@angular/http/testing'; // <-- for dev enviroment only
import { BaseRequestOptions, Http } from '@angular/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';




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
import { MatChipsModule } from '@angular/material';
import { MatTooltipModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


import { Component, ViewChild } from '@angular/core';
import { MatPaginatorModule, MatSortModule } from '@angular/material';





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
// import * as jquery from 'jquery';
// // BOOTSTRAP4
// import * as bootstrap from 'bootstrap';
// // DROPZONE
// import * as dropzone from 'dropzone';

// // GraphQL
// import * as graphql from 'graphql';

import { BottomFooterComponent } from './bottom-footer/bottom-footer.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { FooterComponent } from './footer/footer.component';
import { AssetCommentsComponent } from './asset-comments/asset-comments.component';
import { RelatedAssetsComponent } from './related-assets/related-assets.component';
import { ArtistPageComponent } from './artist-page/artist-page.component';
import { AssetImageCardComponent } from './asset-image-card/asset-image-card.component';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';
import { FeedPageComponent } from './feed-page/feed-page.component';
import { GenresPageComponent } from './genres-page/genres-page.component';
import { ArtropyCarouselComponent } from './artropy-carousel/artropy-carousel.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { ExplorePageComponent } from './explore-page/explore-page.component';
import { AuthGuard } from './auth/guards/auth.guard';



const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: ArtropyHomePageComponent },
  { path: 'originals', component: OriginalsPageComponent },
  { path: 'studios', component: StudiosPageComponent },
  { path: 'trending', component: TrendingPageComponent },
  { path: 'masterworks', component: MasterworksPageComponent },
  { path: 'shop', component: ShopPageComponent },
  { path: 'liked', component: LikedPageComponent },
  {
    path: 'history', component: HistoryPageComponent,
    children: [
      { path: 'history/search', component: HistoryPageComponent },
      { path: 'history/artists', component: HistoryPageComponent },
      { path: 'history/images', component: HistoryPageComponent },
      { path: 'history/donations', component: HistoryPageComponent },
      { path: 'history/purchases', component: HistoryPageComponent }]
  },
  { path: 'following', component: FollowingPageComponent },
  { path: 'reimaginations', component: ReimaginationsPageComponent },
  {
    path: 'login', component: LoginPageComponent
  },
  { path: 'cart', component: CartPageComponent },
  { path: 'sponsers', component: SponsersPageComponent },
  {
    path: 'feed', component: FeedPageComponent,
    children: [
      { path: 'explore', component: ExplorePageComponent }]
  },
  { path: 'followed', component: FollowedPageComponent },
  { path: 'followers', component: FollowedPageComponent },
  { path: 'search', component: SearchPageComponent },
  { path: 'upload', component: UploadPageComponent },
  { path: 'genres', component: GenresPageComponent },
  { path: 'dashboard', component: DashboardPageComponent },
  { path: 'image/:artist/:imageName', component: ImagePageComponent },
  { path: 'image/:artist', component: ArtistPageComponent },
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
    BottomFooterComponent,
    SideNavComponent,
    FooterComponent,
    AssetCommentsComponent,
    RelatedAssetsComponent,
    ArtistPageComponent,
    AssetImageCardComponent,
    FeedPageComponent,
    GenresPageComponent,
    ArtropyCarouselComponent,
    DashboardPageComponent,
    ExplorePageComponent,
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
    MatSortModule,
    MatPaginatorModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    MatCardModule,
    MatGridListModule,
    MatTabsModule,
    MatChipsModule,
    MatTooltipModule,
    MatSelectModule,
    MatProgressBarModule,
    NgxCarouselModule,
    MatTableModule,
    MatProgressSpinnerModule,
    environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : []
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
