import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/_models/userModel';
import { UserService } from 'src/app/_services/user.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  @Input() userSelected: boolean;
  @Input() userData;
  displayDialog: boolean = false;

  constructor(
    private userService: UserService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
  }

  editUser(user: User) {
    this.displayDialog = true;
    this.userSelected = true;
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
        }, err => {
          this.messageService.add({ severity: 'error', summary: 'Error Message', detail: err });
        });
      },
      reject: () => {
        console.log("user didn't be deleted");
      }
    });
  }

  hideDialog(event: boolean) {
    this.displayDialog = event;
  }

}
