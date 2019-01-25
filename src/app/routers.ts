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
        component:  PaperMakerComponent,
        children: [
            {path:"entermarks", component: PaperMakerMarksComponent},           
            {path:"viewmarks", component: PaperMakerViewMrksComponent},                   
            {path:"pmclassschedule", component: PaperMakerClassSchedComponent}          
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