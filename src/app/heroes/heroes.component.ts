import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    // subscribe to a method returning an Observable, then use the emitted
    // value as a parameter to a callback function, e.g. assigning it to this.heroes
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  constructor(private heroService: HeroService) { }

  // call getHeroes function here instead of in constructor
  // do not make function calls in constructor, just simple initializations
  ngOnInit() {
    this.getHeroes();
  }

}
