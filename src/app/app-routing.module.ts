import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/pages/auth/auth.component';
import { ForgotComponent } from './auth/pages/forgot/forgot.component';
import { ResetComponent } from './auth/pages/reset/reset.component';
import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
  },
  {
    path: 'forgot-password',
    component: ForgotComponent,
  },
  {
    path: 'reset-password/:uid/:token',
    component: ResetComponent,
  },
  {
    path: 'diagnostic',
    loadChildren: () =>
      import('./diagnostic/diagnostic.module').then((m) => m.DiagnosticModule),
  },
  {
    path: 'platform',
    loadChildren: () =>
      import('./platform/platform.module').then((m) => m.PlatformModule),
    // canActivate: [AuthGuard],
    // canLoad: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
