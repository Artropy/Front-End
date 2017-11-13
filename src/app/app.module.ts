import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// Angular Material Imports
import { MatToolbarModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import {MatExpansionModule} from '@angular/material';




// Artropy custom components
import { ArtropyTopNavComponent } from './top-nav/top-nav.component';
import { ArtropySideNavComponent } from './side-nav/side-nav.component';

import { MatSidenavModule } from '@angular/material';


import { AppComponent } from './app.component';



// const appRoutes: Routes = [
// {path: '', component}
// ];


@NgModule({
  declarations: [
    AppComponent,
    ArtropyTopNavComponent,
    ArtropySideNavComponent
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
    MatExpansionModule

  ],
  providers: [],
  bootstrap: [AppComponent, ArtropyTopNavComponent, ArtropySideNavComponent]
})
export class AppModule { }
