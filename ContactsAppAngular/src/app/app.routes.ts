import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { UpdateContactComponent } from './components/update-contact/update-contact.component';

export const routes: Routes = [
    {
        path:'', pathMatch:'full', redirectTo:'login'
    },
    {
        path:'login', component:LoginComponent
    },
    {
        path:'register', component:RegisterComponent
    },
    {
        path:'dashboard', component:DashboardComponent
    },
    {
        path:'add-contact', component:AddContactComponent
    },
    {
        path:'contact/:id', component:UpdateContactComponent
    },
    {
        path:'**', component:PageNotFoundComponent
    }
];
