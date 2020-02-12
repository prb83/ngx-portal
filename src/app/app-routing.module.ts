import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { NgxAuthGuardService, NgxRole } from 'projects/ngx-core/src/public_api'

const routes: Routes = [
  {
    path: 'web',
    loadChildren:
      () => import('./../../../ngx-portal-web/src/app/pages/pages.module').then(m => m.PagesModule),
  },
  {
    path: 'app',
    loadChildren:
      () => import('./../../../ngx-portal-app/src/app/dashboard/dashboard.module').then(m => m.NgxDashboardModule),
    canActivate: [NgxAuthGuardService],
    data: {
      expectedRole: NgxRole.Admin,
    },
  },
  {
    path: 'app/dashboard',
    loadChildren:
      () => import('./../../../ngx-portal-app/src/app/dashboard/dashboard.module').then(m => m.NgxDashboardModule),
    canActivate: [NgxAuthGuardService],
    data: {
      expectedRole: NgxRole.Admin,
    },
  },
  {
    path: 'app/account',
    loadChildren:
      () => import('./../../../ngx-portal-app/src/app/login/login.module').then(m => m.AppLoginModule),
  },
  {
    path: 'app/todo',
    loadChildren:
      () => import('./../../../ngx-portal-app/src/app/todo/todo.module').then(m => m.NgxTodoModule),
    canActivate: [NgxAuthGuardService],
    data: {
      expectedRole: NgxRole.Admin,
    },
  },
  {
    path: 'app/cms',
    loadChildren:
      () => import('./../../../ngx-portal-app/src/app/cms/cms.module').then(m => m.NgxCmsModule),
    canActivate: [NgxAuthGuardService],
    data: {
      expectedRole: NgxRole.Admin,
    },
  },
  {
    path: 'app/media',
    loadChildren:
      () => import('./../../../ngx-portal-app/src/app/media/media.module').then(m => m.MediaModule),
    canActivate: [NgxAuthGuardService],
    data: {
      expectedRole: NgxRole.Admin,
    },
  },
  {
    path: 'app/weather',
    loadChildren:
      () => import('./../../../ngx-portal-app/src/app/weather/weather.module').then(m => m.NgxWeatherModule),
    canActivate: [NgxAuthGuardService],
    data: {
      expectedRole: NgxRole.Admin,
    },
  },
  {
    path: 'app/learn',
    loadChildren:
      () => import('./../../../ngx-portal-app/src/app/learn/learn.module').then(m => m.NgxLearnModule),
    canActivate: [NgxAuthGuardService],
    data: {
      expectedRole: NgxRole.Admin,
    },
  },
  { path: '', redirectTo: 'web', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
