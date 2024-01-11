import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlatformComponent } from './pages/platform/platform.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CollaboratorsComponent } from './pages/collaborators/collaborators.component';
import { ConnectionsComponent } from './pages/connections/connections.component';
import { CoursesModule } from './pages/courses/courses.module';
import { MarketplaceComponent } from './pages/marketplace/marketplace.component';
import { TransactionsModule } from './pages/transactions/transactions.module';
import { ResultsModule } from './pages/results/results.module';
import { DiagnosticModule } from './pages/diagnostic/diagnostic.module';
import { ProfileModule } from './pages/profile/profile.module';
import { VideoModule } from './pages/video/video.module';

const routes: Routes = [
  {
    path: '',
    component: PlatformComponent,
    children:[
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'courses',
        loadChildren: () => import('./pages/courses/courses.module').then(m => CoursesModule)
      },
      {
        path: 'collaborators',
        component: CollaboratorsComponent,
      },
      {
        path: 'connections',
        component: ConnectionsComponent,
      },
      {
        path: 'marketplace',
        component: MarketplaceComponent,
      },
      {
        path: 'transactions',
        loadChildren: () => import('./pages/transactions/transactions.module').then(m => TransactionsModule)
      },
      {
        path: 'results',
        loadChildren: () => import('./pages/results/results.module').then(m => ResultsModule)
      },
      {
        path: 'diagnostic',
        loadChildren: () => import('./pages/diagnostic/diagnostic.module').then(m => DiagnosticModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./pages/profile/profile.module').then(m => ProfileModule)
      },
      {
        path: 'video',
        loadChildren: () => import('./pages/video/video.module').then(m => VideoModule)
      },
      {
        path: '**',
        redirectTo: 'platform'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlatformRoutingModule { }
