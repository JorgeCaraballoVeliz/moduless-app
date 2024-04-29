import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, input } from '@angular/core';
import { CardComponent } from './card-component.component';
import { Model } from './model.model';

@Component({
    selector: 'list-card-component',
    template: `
    <card-component *ngFor="let item of data" [data]="item"></card-component>
    `,
    imports: [CommonModule, CardComponent],
    standalone: true
})

export class ListCardComponent implements OnInit {
    @Input() data: Model[] = []
    constructor() { }

    ngOnInit() { }
}