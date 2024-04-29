import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, input } from '@angular/core';
import { Model } from './model.model';

@Component({
    selector: 'card-component',
    template: `
    <div *ngIf="data" class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img
          src="https://bulma.io/assets/images/placeholders/1280x960.png"
          alt="Placeholder image"
        />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img
              [src]="data.picture" alt="placeholder image"
            />
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{{data.name}}</p>
          <p class="subtitle is-6">{{data.name}}</p>
        </div>
      </div>
  
      <div class="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
        iaculis mauris. <a>bulmaio</a>. <a href="#">#css</a>
        <a href="#">#responsive</a>
        <br />
        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
      </div>
    </div>
  </div>
  `,
  standalone: true,
  imports: [CommonModule],
  /*styles: [
    `
    .card-component {
        max-width: 35px;
        background-color: cyan;
    }
    `
  ]*/
})

export class CardComponent implements OnInit {
  @Input() data!: Model;
    constructor() { }

    ngOnInit() { }
}