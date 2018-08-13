import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user;
  name: string;
  private sub: any;

  constructor(private route: ActivatedRoute, private usersService: UsersService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if (params['name']) {
        let users = this.usersService.users;
        let foundUser = users.find(u => u.name == params['name']);

        this.user = {
          name: foundUser.name,
          subtitle: foundUser.subtitle,
          images: foundUser.images
        }
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
