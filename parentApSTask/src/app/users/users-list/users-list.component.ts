import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { UserService } from 'src/app/_services/user.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { User } from 'src/app/_models/userModel';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  usersList: User[] = [];
  users = new BehaviorSubject([]);

  page_title: string;
  page_link: string;
  finished: boolean;

  constructor(
    private userService: UserService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService) { }

  ngOnInit() {
    this.page_link = 'Dashboard';
    this.page_title = 'users list';
    this.finished = false;
    this.getAllUsers();
  }

  getAllUsers() {
    if (this.finished) { return; }

    this.userService.getAll().pipe(first()).subscribe(users => {
      this.usersList = users;
      this.userService.page_number++;
    });
    this.finished = true;
  }

  onScroll() {
    console.log('scrolled!!');
    this.getAllUsers();
  }

}
