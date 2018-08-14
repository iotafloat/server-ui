// Component for the list of users on the main Cabin door page

import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(public usersService:UsersService) {
    
  }

  ngOnInit() {
  }

}
