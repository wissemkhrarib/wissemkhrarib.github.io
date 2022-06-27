import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'src/app/models/level';

@Component({
  selector: 'app-subject-item',
  templateUrl: './subject-item.component.html',
  styleUrls: ['./subject-item.component.scss']
})
export class SubjectItemComponent implements OnInit {
  
  @Input()
  subject!: Subject
  constructor() { }

  ngOnInit(): void {
  }

}
