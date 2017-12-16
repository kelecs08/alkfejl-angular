import { Component, OnInit, Input } from '@angular/core';

import { Film } from '../../classes/film';
import { Performance } from '../../classes/performance';
import { PerformanceService } from '../../services/performance.service';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {

  @Input()
  film: Film;
  @Input()
  peformancesToSelectedFilm: Performance[];

  constructor(
  ) { }

  ngOnInit() {
  }


}
