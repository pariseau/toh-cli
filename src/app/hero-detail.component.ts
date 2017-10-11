import { Component, Input } from '@angular/core';
import { Hero } from './hero';


@Component({
  selector: 'hero-detail',
  template:`
    <div class="col-md-12 selectedheroes" *ngIf="hero">
    <h2>{{hero.name}} details!</h2>
    <div><label>ID: </label>{{hero.id}}</div>
    <div class="input-group input-group-lg">
      <label class="input-group-addon">name </label>
      <input class="form-control" [(ngModel)]="hero.name" placeholder="name">
    </div>
  </div>
  `
})
export class HeroDetailComponent {
  @Input() hero: Hero;
}
