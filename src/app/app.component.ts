import { Component } from '@angular/core';
import { FooterComponent } from "./components/footer/footer.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HomeComponent } from "./pages/home/home.component";
import { ActualiteComponent} from "./pages/actualite/actualite.component"
import { SportComponent } from "./pages/sport/sport.component";
import { EconomieComponent } from "./pages/economie/economie.component";
import { routes } from './app.routes';
import { RouterOutlet } from '@angular/router';
import { ArticlesComponent } from './pages/articles/articles.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, HomeComponent, RouterOutlet],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';

}




