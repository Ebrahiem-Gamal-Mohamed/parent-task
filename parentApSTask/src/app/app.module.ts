import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Modules ...
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PrimengWrapperModule } from './_modules/primeng-wrapper/primeng-wrapper.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
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
// Services ....
import { MessageService } from 'primeng/components/common/messageservice';
import { AuthService } from './_services/auth.service';
import { UserService } from './_services/user.service';
import { ConfirmationService } from 'primeng/api';

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
    BrowserAnimationsModule,
    NgbModule,
    PrimengWrapperModule,
    InfiniteScrollModule
  ],
  providers: [
    AuthService,
    UserService,
    MessageService,
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
