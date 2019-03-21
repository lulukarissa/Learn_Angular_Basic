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
  //GET HEROES
  getHeroes() : void{
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes)
  }

  //ADD HERO
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  //DELETE HERO
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

  //^ NOTES:
  // When the given name is non-blank (!name), the handler creates a Hero-like object from the name (it's only missing the id) and passes it to the services addHero() method.
  // When addHero saves successfully, the subscribe callback receives the new hero and pushes it into to the heroes list for display.

  ngOnInit() {
    this.getHeroes();
  }

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  // }

}
