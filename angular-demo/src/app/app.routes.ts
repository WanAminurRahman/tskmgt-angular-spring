import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { DemoComponent } from './pages/demo/demo.component';
import { AddNewComponent } from './pages/demo/add-new/add-new.component';

export const routes: Routes = [
    { path:"", component: LayoutComponent, children: [
        { path: "home", title: 'Home', component: HomeComponent },
        { path: "about", title: 'About', component: AboutComponent },
        { path: "demo", title: 'Task Management', component: DemoComponent, children: [
            { path: "add-task", title: 'Add New Task', component: AddNewComponent }
        ] },
    ]}
];
