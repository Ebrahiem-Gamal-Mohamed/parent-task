import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  displayDialog: boolean;

  constructor() {
    this.displayDialog = false;
  }

  ngOnInit() {
  }

  showUserDialog() {
    this.displayDialog = true;
  }

  hideDialog(event: boolean) {
    this.displayDialog = event;
  }

}
