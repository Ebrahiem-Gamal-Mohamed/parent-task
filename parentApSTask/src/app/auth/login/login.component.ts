import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthService } from 'src/app/_services/auth.service';
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  returnUrl: string;
  msgs: Message[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService,
    private authenticationService: AuthService,
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/users']);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['peter@klaven', Validators.required],
      password: ['cityslicka', Validators.required]
    });

    // get return url from route parameters or default to '/users'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/users';
  }

  // convenience getter for easy access to form fields
  get field() { return this.loginForm.controls; }

  hasError(field: string, error: string): boolean {
    return this.loginForm.get(field).hasError(error);
  }

  hasErrors(field: string): boolean {
    return this.loginForm.get(field).touched && this.loginForm.get(field).invalid;
  }

  onSubmit() {

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.authenticationService.login(this.field.username.value, this.field.password.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.messageService.add({ severity: 'error', summary: '', detail: 'Username or Password is invalid!' });
        });
  }

}
