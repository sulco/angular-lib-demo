import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Show, TvmazeService } from 'tvmaze';

@Component({
  selector: 'ld-root',
  template: `
    <tm-poster [showId]="336"></tm-poster>
    <pre>{{ show$ | async | json }}</pre>
  `
})
export class AppComponent {
  show$: Observable<Show>;

  constructor(private tvmaze: TvmazeService) {
    this.show$ = this.tvmaze.getShow(336);
  }
}
