import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from '../hero.service';
import { MessageService } from './../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent {

  selectedHero?: Hero;

  heroes: Hero[] = [];

  constructor(private HeroService: HeroService, private messageService : MessageService) {}

  ngOnInit(): void {
    this.getHeroes()
  }
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HerosComponent: Selected hero id=${hero.id}`)
  }

  getHeroes(): void {
    this.HeroService.getHeros()
        .subscribe(heroes => this.heroes = heroes)
  }

}


