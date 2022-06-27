import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LevelsService } from 'src/app/services/levels.service';
import { Level } from 'src/app/models/level';
import { Router } from '@angular/router';

@Component({
  selector: 'app-levels-list',
  templateUrl: './levels-list.component.html',
  styleUrls: ['./levels-list.component.scss']
})
export class LevelsListComponent implements OnInit, OnDestroy {

  levels!: Level[];
  private levelSub!: Subscription;
  private routerSub!: Subscription;

  constructor(private levelsService: LevelsService, private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.levelSub = this.levelsService.getLevels().subscribe((levels: Level[]) => {
        this.levels = levels
      });
    }, 2000)
  }

  ngOnDestroy(): void {
    if (this.levelSub) {
      this.levelSub.unsubscribe();
    }
  }



}
