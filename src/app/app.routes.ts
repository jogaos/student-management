import { Routes } from '@angular/router';
import { StudentRegistryComponent } from './student-registry/student-registry.component';
import { StudentListComponent } from './student-list/student-list.component';

export const routes: Routes = [
    {
        path: "",
        component: StudentRegistryComponent
    },
    {
        path:"student-list",
        component: StudentListComponent
    }
];
