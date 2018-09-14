import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';

export const appRoutes: Routes = [
    {
        path: "",
        component: LoginComponent
    },
    {
        path: "admin",
        component: AdminComponent
    }
]