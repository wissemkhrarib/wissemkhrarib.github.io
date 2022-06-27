import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Level } from 'src/app/models/level';

@Component({
  selector: 'app-level-item',
  templateUrl: './level-item.component.html',
  styleUrls: ['./level-item.component.scss']
})
export class LevelItemComponent implements OnInit {
  @Input()
  level!: Level;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  

}
