import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { NgxAuthGuardService, NgxRole } from 'projects/ngx-core/src/public_api'

const routes: Routes = [
  {
    path: 'web',
    loadChildren:
      './../../../ngx-portal-web/src/app/pages/pages.module#PagesModule',
  },
  {
    path: 'app',
    loadChildren:
      './../../../ngx-portal-app/src/app/dashboard/dashboard.module#NgxDashboardModule',
    canActivate: [NgxAuthGuardService],
    data: {
      expectedRole: NgxRole.Admin,
    },
  },
  {
    path: 'app/dashboard',
    loadChildren:
      './../../../ngx-portal-app/src/app/dashboard/dashboard.module#NgxDashboardModule',
    canActivate: [NgxAuthGuardService],
    data: {
      expectedRole: NgxRole.Admin,
    },
  },
  {
    path: 'app/account',
    loadChildren:
      './../../../ngx-portal-app/src/app/login/login.module#AppLoginModule',
  },
  {
    path: 'app/todo',
    loadChildren:
      './../../../ngx-portal-app/src/app/todo/todo.module#NgxTodoModule',
    canActivate: [NgxAuthGuardService],
    data: {
      expectedRole: NgxRole.Admin,
    },
  },
  {
    path: 'app/cms',
    loadChildren:
      './../../../ngx-portal-app/src/app/cms/cms.module#NgxCmsModule',
    canActivate: [NgxAuthGuardService],
    data: {
      expectedRole: NgxRole.Admin,
    },
  },
  {
    path: 'app/media',
    loadChildren:
      './../../../ngx-portal-app/src/app/media/media.module#MediaModule',
    canActivate: [NgxAuthGuardService],
    data: {
      expectedRole: NgxRole.Admin,
    },
  },
  {
    path: 'app/weather',
    loadChildren:
      './../../../ngx-portal-app/src/app/weather/weather.module#NgxWeatherModule',
    canActivate: [NgxAuthGuardService],
    data: {
      expectedRole: NgxRole.Admin,
    },
  },
  {
    path: 'app/learn',
    loadChildren:
      './../../../ngx-portal-app/src/app/learn/learn.module#NgxLearnModule',
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
