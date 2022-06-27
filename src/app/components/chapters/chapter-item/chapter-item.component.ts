import { Component, Input, OnInit } from '@angular/core';
import { Chapter } from 'src/app/models/level';

@Component({
  selector: 'app-chapter-item',
  templateUrl: './chapter-item.component.html',
  styleUrls: ['./chapter-item.component.scss']
})
export class ChapterItemComponent implements OnInit {

  @Input()
  chapter!: Chapter;
  @Input()
  index!: number;
  constructor() { }

  ngOnInit(): void {
  }

}
