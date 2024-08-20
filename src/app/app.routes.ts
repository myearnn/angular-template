// import { Routes } from '@angular/router';
// export const routes = [
// ];


import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';

export const routes: Routes = [
    {path: '', component: HomepageComponent},
    { path: 'login', component: LoginComponent }
];
