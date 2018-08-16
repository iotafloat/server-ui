// Component for a user card on the Cabin Door main page

import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'user-thumbnail',
  templateUrl: './user-thumbnail.component.html',
  styleUrls: ['./user-thumbnail.component.css']
})
export class UserThumbnailComponent implements OnInit {
  @Input()
  user;
  slider = true;
  onChange(event) {
    if (event.checked === true) {
      this.slider = false;
    }
  };

  ngOnInit() {
  }

}
