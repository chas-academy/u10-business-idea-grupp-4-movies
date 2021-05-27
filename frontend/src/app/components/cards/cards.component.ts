import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../../../services/movies.service';

import { trigger, keyframes, animate, transition } from "@angular/animations";
import * as kf from './keyframes';
import { Subject } from 'rxjs';
import {Movie} from './movie';

@Component({
    selector: 'app-cards',
    templateUrl: './cards.component.html',
    styleUrls: ['./cards.component.scss'],
    animations: [
      trigger('cardAnimator', [
        transition('* => swiperight', animate(750, keyframes(kf.swiperight))),
        transition('* => swipeleft', animate(750, keyframes(kf.swipeleft)))
      ])
    ]
})
export class CardsComponent implements OnInit {
  
  public movies: Movie[];
  public index = 0;
  @Input()
  parentSubject: Subject<any>;

  animationState: string;

    constructor(public movieService: MoviesService) {
        this.handleMovies();
    }

    ngOnInit() {
      this.parentSubject.subscribe(event => {
        this.startAnimation(event)
        console.log(this.movies);
      });
    } 

    startAnimation(state) {
      if (!this.animationState) {
        this.animationState = state;
      }
    }
  
    resetAnimationState(state) {
      this.animationState = '';
      this.index++;
    }
  
  
    ngOnDestroy() {
      this.parentSubject.unsubscribe();
    }

    handleMovies() {
        const request = this.movieService.getMovies();
        request.subscribe((data) => {
            console.log(data);
            this.movies = data;
        });
    }
}
