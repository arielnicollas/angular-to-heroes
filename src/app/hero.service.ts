import { Injectable } from '@angular/core';
import { HEROES } from './heroes/mock-heroes';
import { Hero } from '../app/heroes/hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  
  getHeros(): Observable<Hero[]> {
    const heroes = of(HEROES)
    this.messageService.add('HeroService: fetched heroes')
    return heroes
  }

  constructor(private messageService: MessageService) {}
}

