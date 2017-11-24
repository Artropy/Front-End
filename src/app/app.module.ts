// Base angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

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

const appRoutes: Routes = [
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
  bootstrap: [AppComponent]
})
export class AppModule { }
