import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Level } from 'src/app/models/level';
import { LevelsService } from 'src/app/services/levels.service';

@Component({
  selector: 'app-subjects-list',
  templateUrl: './subjects-list.component.html',
  styleUrls: ['./subjects-list.component.scss']
})
export class SubjectsListComponent implements OnInit, OnDestroy {

  levelId!: string;
  level!: Level;
  routeSub!: Subscription;
  levelSub!: Subscription;

  constructor(private activatedrRoute: ActivatedRoute,  private router: Router, private levelsService: LevelsService) { }

   ngOnInit(): void {
    this.routeSub = this.activatedrRoute.params.subscribe((params: Params) => {
      this.levelId = params['id'];
    });
      setTimeout(()=>{
        this.levelSub = this.levelsService.getLevelWithSubjects(this.levelId).subscribe((level: Level)=>{
          this.level = level
        });
   },2000)
   


  }

 
  

  ngOnDestroy(){
    if(this.levelSub){
      this.levelSub.unsubscribe()
    }
    if(this.routeSub){
      this.routeSub.unsubscribe()
    }
  }

}
