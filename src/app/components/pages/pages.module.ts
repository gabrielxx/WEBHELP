import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PAGES_ROUTES } from './pages.routes';

import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { StarshipsComponent } from './starships/starships.component';
import { StarshipsService } from '../../providers/starships.service';
import {HttpClientModule} from '@angular/common/http';
import { PeopleComponent } from './people/people.component'
import { PeopleService } from '../../providers/people.service';


@NgModule({
  declarations: [
    PagesComponent, 
    HeaderComponent, 
    FooterComponent,
    StarshipsComponent,
    PeopleComponent
  ],

  imports: [
    BrowserModule,
    PAGES_ROUTES,
    HttpClientModule
  ],
  exports: [
    PagesComponent
  ],
  providers: [
    StarshipsService,
    PeopleService
  ]
})
export class PagesModule { }
