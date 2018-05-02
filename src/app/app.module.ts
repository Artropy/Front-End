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
import { Ng2GoogleChartsModule } from 'ng2-google-charts';





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
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonToggleModule } from '@angular/material/button-toggle';



import { Component, ViewChild } from '@angular/core';
import { MatPaginatorModule, MatSortModule } from '@angular/material';





// Artropy custom components
import { AppComponent } from './app.component';
import { ArtropyTopNavComponent } from './components/top-nav/top-nav.component';
import { ArtropyHomePageComponent } from './components/home-page/home-page.component';
import { OriginalsPageComponent } from './components/originals-page/originals-page.component';
import { StudiosPageComponent } from './components/studios-page/studios-page.component';
import { TrendingPageComponent } from './components/trending-page/trending-page.component';
import { MasterworksPageComponent } from './components/masterworks-page/masterworks-page.component';
import { ShopPageComponent } from './components/shop-page/shop-page.component';
import { LikedPageComponent } from './components/liked-page/liked-page.component';
import { HistoryPageComponent } from './components/history-page/history-page.component';
import { FollowingPageComponent } from './components/following-page/following-page.component';
import { ReimaginationsPageComponent } from './components/reimaginations-page/reimaginations-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { SponsersPageComponent } from './components/sponsers-page/sponsers-page.component';
import { FollowedPageComponent } from './components/followed-page/followed-page.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { VideosPageComponent } from './components/videos-page/videos-page.component';
import { LivePageComponent } from './components/live-page/live-page.component';
import { ImagePageComponent } from './components/image-page/image-page.component';
import { Http404PageComponent } from './components/http404-page/http404-page.component';
import { UploadPageComponent } from './components/upload-page/upload-page.component';

// Other libraries

// JQuery
// import * as jquery from 'jquery';
// // BOOTSTRAP4
// import * as bootstrap from 'bootstrap';
// // DROPZONE
// import * as dropzone from 'dropzone';

// // GraphQL
// import * as graphql from 'graphql';

import { BottomFooterComponent } from './components/bottom-footer/bottom-footer.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { AssetCommentsComponent } from './components/asset-comments/asset-comments.component';
import { RelatedAssetsComponent } from './components/related-assets/related-assets.component';
import { ArtistPageComponent } from './components/artist-page/artist-page.component';
import { AssetImageCardComponent } from './components/asset-image-card/asset-image-card.component';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';
import { FeedPageComponent } from './components/feed-page/feed-page.component';
import { GenresPageComponent } from './components/genres-page/genres-page.component';
import { ArtropyCarouselComponent } from './components/artropy-carousel/artropy-carousel.component';
import { DashboardPageComponent } from './components/dashboard-page/dashboard-page.component';
import { ExplorePageComponent } from './components/explore-page/explore-page.component';
import { FeedFollowingPageComponent } from './components/feed-following-page/feed-following-page.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { TrendingTodayComponent } from './components/trending-today/trending-today.component';
import { TrendingWeekComponent } from './components/trending-week/trending-week.component';
import { TrendingMonthComponent } from './components/trending-month/trending-month.component';
import { DashboardAnalyticsComponent } from './components/dashboard-analytics/dashboard-analytics.component';
import { DashboardMonetizationComponent } from './components/dashboard-monetization/dashboard-monetization.component';
import { DashboardAboutComponent } from './components/dashboard-about/dashboard-about.component';
import { DashboardUploadsComponent } from './components/dashboard-uploads/dashboard-uploads.component';
import { DashboardStudiosComponent } from './components/dashboard-studios/dashboard-studios.component';
import { HistoryArtworkComponent } from './components/history-artwork/history-artwork.component';
import { HistorySearchComponent } from './components/history-search/history-search.component';
import { HistoryDonationsComponent } from './components/history-donations/history-donations.component';
import { HistoryPurchasesComponent } from './components/history-purchases/history-purchases.component';
import { HistoryCommentsComponent } from './components/history-comments/history-comments.component';



const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: ArtropyHomePageComponent },
  { path: 'originals', component: OriginalsPageComponent },
  { path: 'studios', component: StudiosPageComponent },
  {
    path: 'trending', component: TrendingPageComponent,
    children: [
      { path: '', component: TrendingTodayComponent },
      { path: 'today', component: TrendingTodayComponent },
      { path: 'week', component: TrendingWeekComponent },
      { path: 'month', component: TrendingMonthComponent }]
  },
  { path: 'masterworks', component: MasterworksPageComponent },
  { path: 'shop', component: ShopPageComponent },
  { path: 'liked', component: LikedPageComponent },
  {
    path: 'history', component: HistoryPageComponent,
    children: [
      { path: '', component: HistoryArtworkComponent },
      { path: 'search', component: HistorySearchComponent },
      { path: 'artwork', component: HistoryArtworkComponent },
      { path: 'comments', component: HistoryCommentsComponent },
      { path: 'donations', component: HistoryDonationsComponent },
      { path: 'purchases', component: HistoryPurchasesComponent }]
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
      { path: '', component: FeedFollowingPageComponent },
      { path: 'following', component: FeedFollowingPageComponent },
      { path: 'explore', component: ExplorePageComponent },
    ]
  },
  { path: 'followed', component: FollowedPageComponent },
  { path: 'followers', component: FollowedPageComponent },
  { path: 'search', component: SearchPageComponent },
  { path: 'upload', component: UploadPageComponent },
  { path: 'genres', component: GenresPageComponent },
  {
    path: 'dashboard', component: DashboardPageComponent, children: [
      { path: '', component: DashboardUploadsComponent },
      { path: 'analytics', component: DashboardAnalyticsComponent },
      { path: 'monetization', component: DashboardMonetizationComponent },
      { path: 'uploads', component: DashboardUploadsComponent },
      { path: 'about', component: DashboardAboutComponent },
      { path: 'studios', component: DashboardStudiosComponent }
    ]
  },
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
    FeedFollowingPageComponent,
    TrendingTodayComponent,
    TrendingWeekComponent,
    TrendingMonthComponent,
    DashboardAnalyticsComponent,
    DashboardMonetizationComponent,
    DashboardAboutComponent,
    DashboardUploadsComponent,
    DashboardStudiosComponent,
    HistoryArtworkComponent,
    HistorySearchComponent,
    HistoryDonationsComponent,
    HistoryPurchasesComponent,
    HistoryCommentsComponent,
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
    MatDialogModule,
    MatButtonToggleModule,
    Ng2GoogleChartsModule,
    environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : []
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
