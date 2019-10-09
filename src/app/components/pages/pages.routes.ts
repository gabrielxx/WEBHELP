import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { StarshipsComponent } from './starships/starships.component';
import { PeopleComponent } from './people/people.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';


const redirectUnauthorizedToHome = () => redirectUnauthorizedTo(['/login']);
const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToHome },
    children: [
      { path: '', component: StarshipsComponent },
      { path: 'people', component: PeopleComponent }

    ]
  },
];
export const PAGES_ROUTES = RouterModule.forChild(routes)