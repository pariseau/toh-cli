import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}
const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
    <div class="navbar navbar-inverse bg-primary"><span class="navbar-brand">{{title}}</span></div>
    <h2>My Heroes</h2>
    <div class="row">
    <div class="col-md-3">
  <ul class="list-group heroes">
    <li class="list-group-item" *ngFor="let hero of heroes" [class.active]="hero === selectedHero" (click)="onSelect(hero)" >
      <span class="badge badge-primary">{{hero.id}}</span> {{hero.name}}
    </li>
  </ul>
    </div>
  <div class="col-md-2 selectedheroes" *ngIf="selectedHero">
  <h2>{{selectedHero.name}} details!</h2>
  <div><label>ID: </label>{{selectedHero.id}}</div>
  <div class="input-group input-group-lg">
    <label class="input-group-addon">name </label>
    <input class="form-control" [(ngModel)]="selectedHero.name" placeholder="name">
  </div>
  </div>
    </div>
  `
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes = HEROES;
  selectedHero: Hero;


  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
