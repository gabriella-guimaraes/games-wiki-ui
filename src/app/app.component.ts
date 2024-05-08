import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'games wiki ui';
}

//TODO:
// 1- Editar a NavBar - ok
// 2 - Criar as rotas no arquivo de rotas - ok
// 3 - Estilizar componentes
// 4 - conectar a API (local)
