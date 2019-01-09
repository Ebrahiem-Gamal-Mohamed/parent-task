import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Modules ...
import { AppRoutingModule } from './app-routing.module';
// Components ...
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { BreadCrumbComponent } from './shared/bread-crumb/bread-crumb.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { UserFormComponent } from './users/user-form/user-form.component';
import { AddUserComponent } from './users/add-user/add-user.component';

@NgModule({
  declarations: [
  AppComponent,
  LoginComponent,
  RegisterComponent,
  BreadCrumbComponent,
  FooterComponent,
  HeaderComponent,
  UsersListComponent,
  UserDetailsComponent,
  UserFormComponent,
  AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
