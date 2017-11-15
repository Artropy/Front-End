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
import {MatExpansionModule} from '@angular/material';
import {MatListModule} from '@angular/material';
import {MatCardModule} from '@angular/material';
import {MatGridListModule} from '@angular/material';






// Artropy custom components
import { ArtropyTopNavComponent } from './top-nav/top-nav.component';
// import { ArtropySideNavComponent } from './side-nav/side-nav.component';
import { ArtropyHomePageComponent } from './home-page/home-page.component';

import { MatSidenavModule } from '@angular/material';


import { AppComponent } from './app.component';



const appRoutes: Routes = [
  { path: 'home', component: ArtropyHomePageComponent },
  // { path: 'Studios', component: ArtropyHomePageComponent },
  // { path: 'Reimaginations', component: ArtropyReimaginationsComponent },
  // { path: 'Trending', component: ArtropyHomePageComponent },
  // { path: 'Masterworks', component: ArtropyHomePageComponent },
  // { path: 'Shop', component: ArtropyHomePageComponent },
  // { path: 'History', component: ArtropyHomePageComponent },
  // { path: 'Liked', component: ArtropyHomePageComponent },
  // { path: 'Following', component: ArtropyFollowingComponent },
  // { path: 'Account', component: ArtropyFollowingComponent },
  // { path: 'Login', component: ArtropyFollowingComponent },
  // { path: 'Create', component: ArtropyFollowingComponent },
  // { path: 'Search', component: ArtropyFollowingComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    ArtropyTopNavComponent,
    ArtropyHomePageComponent
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
    MatGridListModule

  ],
  providers: [],
  bootstrap: [AppComponent, ArtropyTopNavComponent, ArtropyHomePageComponent]
})
export class AppModule { }
