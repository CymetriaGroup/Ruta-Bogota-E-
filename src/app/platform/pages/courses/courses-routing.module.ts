import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ListComponent } from './pages/list/list.component';
import { DetailComponent } from './pages/detail/detail.component';


const routes: Routes = [
  {
    path: '',
    children:[
      {
        path: '',
        component: DashboardComponent,
      },
      /*{
        path: ':slug',
        component: ListComponent,
      },*/
      {
        path: ':slug/:id',
        component: DetailComponent,
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
