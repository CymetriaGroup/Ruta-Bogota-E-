import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from '../diagnostic/pages/register/register.component';
import { ResultsComponent } from '../diagnostic/pages/results/results.component';

const routes: Routes = [
  {
    path: '',
    children:[
      {
        path: '',
        component: RegisterComponent,
      },
      {
        path: 'results/:id',
        component: ResultsComponent,
      },
      {
        path: '**',
        redirectTo: 'diagnostic'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiagnosticRoutingModule { }
