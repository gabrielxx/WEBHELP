import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { StarshipsComponent } from './starships/starships.component';
import { PeopleComponent } from './people/people.component';



const routes: Routes = [
  {   path: '', 
      component: PagesComponent,
      children : [
        { path: '', component: StarshipsComponent },
        { path: 'people', component: PeopleComponent }

      ]
  },  
  ];

  export const PAGES_ROUTES = RouterModule.forChild(routes)