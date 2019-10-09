import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { StarshipsComponent } from './starships/starships.component';
import { PeopleComponent } from './people/people.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { ShipDetailComponent } from './ship-detail/ship-detail.component';


const redirectUnauthorizedToHome = () => redirectUnauthorizedTo(['/login']);
const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToHome },
    children: [
      { path: '', component: StarshipsComponent },
      { path: 'people', component: PeopleComponent },
      { path: 'shipDetail/:id', component:  ShipDetailComponent}

    ]
  },
];
export const PAGES_ROUTES = RouterModule.forChild(routes)