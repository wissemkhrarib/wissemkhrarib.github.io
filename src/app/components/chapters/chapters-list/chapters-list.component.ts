import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Subject } from 'src/app/models/level';
import { SubjectsService } from 'src/app/services/subjects.service';

@Component({
  selector: 'app-chapters-list',
  templateUrl: './chapters-list.component.html',
  styleUrls: ['./chapters-list.component.scss']
})
export class ChaptersListComponent implements OnInit, OnDestroy {

  levelId!: string;
  subjectId!: string;
  routeSub!: Subscription;
  subjectSub!: Subscription;
  subject!: Subject;

  constructor(private activatedrRoute: ActivatedRoute, private router: Router, private subjectsService: SubjectsService) { }
  

   ngOnInit(): void{
    this.routeSub = this.activatedrRoute.params.subscribe((params: Params) => {
      this.levelId = params['levelId'];
      this.subjectId = params['subjectId'];
    })
    setTimeout(()=>{
      this.subjectSub = this.subjectsService.getSubjectWithChapters(this.levelId, this.subjectId).subscribe((subject: Subject)=>{
        this.subject=subject
      });
    }, 2000);
  }




  ngOnDestroy(): void {
    if(this.routeSub){
      this.routeSub.unsubscribe();
    }
    if(this.subjectSub){
      this.subjectSub.unsubscribe();
    }
  }
}
