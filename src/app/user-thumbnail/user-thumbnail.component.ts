import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'user-thumbnail',
  templateUrl: './user-thumbnail.component.html',
  styleUrls: ['./user-thumbnail.component.css']
})
export class UserThumbnailComponent implements OnInit {
  @Input()
  user;

  constructor() { }

  ngOnInit() {
  }

}
