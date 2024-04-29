import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './components/card-component.component';
import { CommonModule } from '@angular/common';
import { ListCardComponent } from './components/list-card-component.component';
import { Model } from './components/model.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListCardComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'moduless-app';
  data: Model [] = [
    {
      name: 'jorge',
      picture: 'https://bulma.io/assets/images/placeholders/1280x960.png'
    
    },
    {
      name: 'jorge2',
      picture: 'https://bulma.io/assets/images/placeholders/1280x960.png'
    
    },
    {
      name: 'jorge3',
      picture: 'https://bulma.io/assets/images/placeholders/1280x960.png'
    
    },
  ]
}
