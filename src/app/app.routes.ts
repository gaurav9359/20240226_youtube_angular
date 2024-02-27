import { Routes } from '@angular/router';
import { HomeComponent } from './Routes/home/home.component';
import { SubscribedComponent } from './Routes/subscribed/subscribed.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "subscribed", component: SubscribedComponent }
];
