import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'project',
        loadChildren: () => import('./project/users/login-user.module').then(m => m.LoginUserModule)
    },
    {
        path: '',
        redirectTo: 'project',
        pathMatch: 'full'
    }
];
