import { Routes } from '@angular/router';
import { HomeComponent} from '../app/pages/home/home.component'
import { SportComponent} from '../app/pages/sport/sport.component'
import { ActualiteComponent } from './pages/actualite/actualite.component';
import { EconomieComponent } from './pages/economie/economie.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ArticlesComponent } from './pages/articles/articles.component';
export const routes: Routes = [
    { 
        path: '', 
        redirectTo:'' ,
        pathMatch:'full'
    },
    { 
        path: '',
        component: HomeComponent 
    },
    { 
        path: 'sport', 
        component: SportComponent
    },
    {
        path:'actualite',
        component:ActualiteComponent
    },
    {
        path:'economie',
        component:EconomieComponent
    },
    {
        path:'navbar',
        component:NavbarComponent
    },
    {
        path:'articles',
        component:ArticlesComponent
    }
];

