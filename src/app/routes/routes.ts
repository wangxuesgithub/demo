import { LoginComponent } from '../login/login.component';
import { LayoutComponent } from '../layout/layout.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { UsersComponent } from '../users/users.component';
import { FormComponent } from '../form/form.component';
import { AvatarComponent } from '../avatar/avatar.component';
import { SpinComponent } from '../spin/spin.component';

export const routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'users', component: UsersComponent },
            { path: 'form', component: FormComponent },
            { path: 'avatar', component: AvatarComponent },
            { path: 'spin', component: SpinComponent }
        ]
    },
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' }
];