import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable } form 'rxjs/Observable';
import { of } form 'rxjs/observable/of';
import { MessageService } form './message.service';

@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    //Todo : send the menssage ...
    this.messageService.add('HeroSErvice: fetched heroes');
    return of(HEROES);
  }
}
