import { Routes } from '@angular/router';
import { HomeComponent } from './Routes/home/home.component';
import { SubscribedComponent } from './Routes/subscribed/subscribed.component';

export const routes: Routes = [
    // if the route is '/' then it will navigate to home component
    { path: "", component: HomeComponent },
    // if the route is '/subscribed' then it will navigate to subscribed component
    { path: "subscribed", component: SubscribedComponent }
];
