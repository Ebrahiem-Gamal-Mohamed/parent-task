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
  userSelected: boolean;
  displayDialog: boolean;
  finished: boolean;
  addNewUser: boolean;
  userData: any;
  rowSelected: number;

  constructor(
    private userService: UserService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService) { }

  ngOnInit() {
    this.page_link = 'Dashboard';
    this.page_title = 'users list';
    this.userSelected = false;
    this.finished = false;
    this.displayDialog = false;
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

  editUserData(user: User) {
    this.displayDialog = true;
    this.userSelected = false;
    this.userData = user;
    console.log(user);
  }

  deleteUser(user) {
    this.userSelected = false;
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + '<span>' + user.first_name + ' ' + user.last_name + '</span>',
      accept: () => {
        this.userService.delete(user.id).pipe(first()).subscribe(() => {
          this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'User Deleted Successfully!' });
          this.getAllUsers();
        }, err => {
          this.messageService.add({ severity: 'error', summary: 'Error Message', detail: err });
        });
      },
      reject: () => {
        console.log("user didn't be deleted");
      }
    });
  }

  setSelectedUser(i: number) {
    this.rowSelected = i;
  }

  showUserData(user: User) {
    this.userSelected = true;
    this.userData = user;
    console.log(user);
  }

  onScroll() {
    console.log('scrolled!!');
    this.getAllUsers();
  }

  hideDialog(event: boolean) {
    this.displayDialog = event;
  }

}
