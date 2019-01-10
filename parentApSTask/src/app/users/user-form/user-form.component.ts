import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/_services/auth.service';
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { UserService } from 'src/app/_services/user.service';
import { User } from 'src/app/_models/userModel';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @Output() dialogStatus = new EventEmitter();
  @Input() addNew: boolean;
  @Input() userData: User;
  userForm: FormGroup;
  msgs: Message[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private messageService: MessageService,
    private authenticationService: AuthService,
    private userService: UserService
  ) {
    this.addNew = true;
    // redirect to home if already logged in
    if (!this.authenticationService.currentUserValue) {
      this.router.navigate(['/login']);
    }
  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      job_title: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get field() { return this.userForm.controls; }

  hasError(field: string, error: string): boolean {
    return this.userForm.get(field).hasError(error);
  }

  hasErrors(field: string): boolean {
    return this.userForm.get(field).touched && this.userForm.get(field).invalid;
  }

  onSubmit() {
    // stop here if form is invalid
    if (this.userForm.invalid) {
      return;
    }

    if (this.addNew) {
      this.userService.add(this.userForm.value)
        .subscribe(
          data => {
            console.log(data);
            this.messageService.add({ severity: 'success', summary: 'Adding Successfully', detail: 'User Added Successfully!' });
          },
          error => {
            console.log(this.userForm.value);
            this.messageService.add({ severity: 'error', summary: 'Adding Error', detail: error });
          });
      this.cancelAddingUser();
    } else {
      this.userService.update(this.userForm.value).subscribe(
        data => {
          this.messageService.add({ severity: 'success', summary: 'Updating Successfully', detail: 'User Updated Successfully!' });
        },
        error => {
          this.messageService.add({ severity: 'error', summary: 'Updating Error', detail: error });
        });
      this.dialogStatus.emit(false);
    }
  }

  cancelAddingUser() {
    this.dialogStatus.emit(false);
    this.userForm.reset();
  }

}
