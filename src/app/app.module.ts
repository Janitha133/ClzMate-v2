import { appRoutes } from './routers';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { AdminSidebarComponent } from './admin/admin-sidebar/admin-sidebar.component';
import { AdminRegstComponent } from './admin/admin-regst/admin-regst.component';
import { RouterModule } from '@angular/router';
import { AdRegStudentComponent } from './admin/admin-regst/ad-reg-student/ad-reg-student.component';
import { AdRegTeacherComponent } from './admin/admin-regst/ad-reg-teacher/ad-reg-teacher.component';
import { AdminDashbordComponent } from './admin/admin-dashbord/admin-dashbord.component';
import { AdRegPaperMkrComponent } from './admin/admin-regst/ad-reg-paper-mkr/ad-reg-paper-mkr.component';
import { AdRegCardMkrComponent } from './admin/admin-regst/ad-reg-card-mkr/ad-reg-card-mkr.component';
import { AdminUserListComponent } from './admin/admin-user-list/admin-user-list.component';
import { AuthService } from './services/auth.service';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    AdminComponent,
    AdminSidebarComponent,
    AdminRegstComponent,
    AdRegStudentComponent,
    AdRegTeacherComponent,
    AdminDashbordComponent,
    AdRegPaperMkrComponent,
    AdRegCardMkrComponent,
    AdminUserListComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(
      appRoutes
    ),
    HttpModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
