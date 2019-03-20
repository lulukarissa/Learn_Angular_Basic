import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
// import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // // jika import dari komponen hero
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };

  //import dari komponen mock-heroes
  heroes: Hero[];
  // selectedHero: Hero;
  // selectedHero property are no longer used after routing
  
  constructor(private heroService: HeroService) { }

  // // original getHeroes (tanpa observable)
  // getHeroes() : void{
  //   this.heroes = this.heroService.getHeroes()
  // }

  //untuk observable
  getHeroes() : void{
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes)
  }

  ngOnInit() {
    this.getHeroes();
  }

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  // }

}
