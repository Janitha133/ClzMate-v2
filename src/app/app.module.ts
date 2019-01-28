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
import { AdminAttendComponent } from './admin/admin-attend/admin-attend.component';
import { AdminClassFeesComponent } from './admin/admin-class-fees/admin-class-fees.component';
import { AdminClassSchedComponent } from './admin/admin-class-sched/admin-class-sched.component';
import { UserService } from './services/users.service';
import { SubjectService } from './services/subject.service';
import { ClzService } from './services/clz.service';
import { ForgotPswdComponent } from './forgot-pswd/forgot-pswd.component';
import { PgeNtFoundComponent } from './pge-nt-found/pge-nt-found.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { PaymentService } from './services/payment.service';
import { AttendanceService } from './services/attendance.service';
import { PaperMakerComponent } from './paper-maker/paper-maker.component';
import { TeacherComponent } from './teacher/teacher.component';
import { TeacherSidebarComponent } from './teacher/teacher-sidebar/teacher-sidebar.component';
import { PaperMakerSidebarComponent } from './paper-maker/paper-maker-sidebar/paper-maker-sidebar.component';
import { PaperMakerMarksComponent } from './paper-maker/paper-maker-marks/paper-maker-marks.component';
import { PaperMakerClassSchedComponent } from './paper-maker/paper-maker-class-sched/paper-maker-class-sched.component';
import { PaperMakerViewMrksComponent } from './paper-maker/paper-maker-view-mrks/paper-maker-view-mrks.component';
import { SuperAdminComponent } from './super-admin/super-admin.component';
import { SpSidebarComponent } from './super-admin/sp-sidebar/sp-sidebar.component';
import { SpaRegstComponent } from './super-admin/spa-regst/spa-regst.component';
import { SpaAdminListComponent } from './super-admin/spa-admin-list/spa-admin-list.component';
import { TeaAttendComponent } from './teacher/tea-attend/tea-attend.component';
import { TeaClzFeesComponent } from './teacher/tea-clz-fees/tea-clz-fees.component';
import { MarksComponent } from './teacher/marks/marks.component';
import { TeaCrtPaperComponent } from './teacher/tea-crt-paper/tea-crt-paper.component';
import { TeaClzSchedComponent } from './teacher/tea-clz-sched/tea-clz-sched.component';


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
    AdminAttendComponent,
    AdminClassFeesComponent,
    AdminClassSchedComponent,
    ForgotPswdComponent,
    PgeNtFoundComponent,
    SpinnerComponent,
    PaperMakerComponent,
    TeacherComponent,
    TeacherSidebarComponent,
    PaperMakerSidebarComponent,
    PaperMakerMarksComponent,
    PaperMakerClassSchedComponent,
    PaperMakerViewMrksComponent,
    SuperAdminComponent,
    SpSidebarComponent,
    SpaRegstComponent,
    SpaAdminListComponent,
    TeaAttendComponent,
    TeaClzFeesComponent,
    MarksComponent,
    TeaCrtPaperComponent,
    TeaClzSchedComponent,
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
    PaymentService,
    AttendanceService,
    AuthService,
    UserService,
    SubjectService,
    ClzService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
