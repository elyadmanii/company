import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/company/list/list.component';
import { AddComponent } from './components/company/add/add.component';

const routes: Routes = [
    {
        path: 'companies',
        component: ListComponent
    },
    {
        path: 'add',
        component: AddComponent
    },
    {
        path: '',
        redirectTo: 'companies',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }