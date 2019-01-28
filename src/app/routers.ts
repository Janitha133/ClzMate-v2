import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AdminDashbordComponent } from './admin/admin-dashbord/admin-dashbord.component';
import { AdminRegstComponent } from './admin/admin-regst/admin-regst.component';
import { AdminUserListComponent } from './admin/admin-user-list/admin-user-list.component';
import { AdminAttendComponent } from './admin/admin-attend/admin-attend.component';
import { AdminClassFeesComponent } from './admin/admin-class-fees/admin-class-fees.component';
import { AdminClassSchedComponent } from './admin/admin-class-sched/admin-class-sched.component';
import { PgeNtFoundComponent } from './pge-nt-found/pge-nt-found.component';
import { ForgotPswdComponent } from './forgot-pswd/forgot-pswd.component';
import { PaperMakerComponent } from './paper-maker/paper-maker.component';
import { PaperMakerMarksComponent } from './paper-maker/paper-maker-marks/paper-maker-marks.component';
import { PaperMakerViewMrksComponent } from './paper-maker/paper-maker-view-mrks/paper-maker-view-mrks.component';
import { PaperMakerClassSchedComponent } from './paper-maker/paper-maker-class-sched/paper-maker-class-sched.component';
import { SuperAdminComponent } from './super-admin/super-admin.component';
import { SpaRegstComponent } from './super-admin/spa-regst/spa-regst.component';
import { SpaAdminListComponent } from './super-admin/spa-admin-list/spa-admin-list.component';
import { TeacherComponent } from './teacher/teacher.component';
import { MarksComponent } from './teacher/marks/marks.component';
import { TeaAttendComponent } from './teacher/tea-attend/tea-attend.component';
import { TeaClzFeesComponent } from './teacher/tea-clz-fees/tea-clz-fees.component';
import { TeaClzSchedComponent } from './teacher/tea-clz-sched/tea-clz-sched.component';
import { TeaCrtPaperComponent } from './teacher/tea-crt-paper/tea-crt-paper.component';

export const appRoutes: Routes = [
    {
        path: "",
        component: LoginComponent
    },
    {
        path: "admin",
        component: AdminComponent,
        children: [
            {path:"dashboard", component: AdminDashbordComponent},
            {path:"registration", component: AdminRegstComponent},
            {path:"userlist", component: AdminUserListComponent},           
            {path:"attendance", component: AdminAttendComponent},           
            {path:"classfees", component: AdminClassFeesComponent},          
            {path:"classschedule", component: AdminClassSchedComponent}          
        ]
    },
    {
        path: "papermarker",
        component: PaperMakerComponent,
        children: [
            {path:"entermarks", component: PaperMakerMarksComponent},           
            {path:"viewmarks", component: PaperMakerViewMrksComponent},                   
            {path:"pmclassschedule", component: PaperMakerClassSchedComponent}          
        ]
    },
    {
        path: "superadmin",
        component: SuperAdminComponent,
        children: [
            {path:"registration", component: SpaRegstComponent},                  
            {path:"adminlist", component: SpaAdminListComponent}                 
        ]
    },
    {
        path: "teacher",
        component: TeacherComponent,
        children: [
            {path:"viewmarks", component: MarksComponent},                  
            {path:"attendance", component: TeaAttendComponent},                 
            {path:"classfees", component: TeaClzFeesComponent},                 
            {path:"schedule", component: TeaClzSchedComponent},                 
            {path:"crwatepaper", component: TeaCrtPaperComponent}                 
        ]
    },
    {
        path: "forgotpswd",
        component: ForgotPswdComponent,
    },
    {
        path: '**',
        component: PgeNtFoundComponent
    }

]