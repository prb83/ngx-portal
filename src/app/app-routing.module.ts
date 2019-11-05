import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

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
  },
  {
    path: 'app/dashboard',
    loadChildren:
      './../../../ngx-portal-app/src/app/dashboard/dashboard.module#NgxDashboardModule',
  },
  {
    path: 'app/login',
    loadChildren:
      './../../../ngx-portal-app/src/app/login/login.module#AppLoginModule',
  },
  {
    path: 'app/todo',
    loadChildren:
      './../../../ngx-portal-app/src/app/todo/todo.module#NgxTodoModule',
  },
  {
    path: 'app/cms',
    loadChildren:
      './../../../ngx-portal-app/src/app/cms/cms.module#NgxCmsModule',
  },
  {
    path: 'app/media',
    loadChildren:
      './../../../ngx-portal-app/src/app/media/media.module#MediaModule',
  },
  {
    path: 'app/weather',
    loadChildren:
      './../../../ngx-portal-app/src/app/weather/weather.module#NgxWeatherModule',
  },
  {
    path: 'app/learn',
    loadChildren:
      './../../../ngx-portal-app/src/app/learn/learn.module#NgxLearnModule',
  },
  { path: '', redirectTo: 'web', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
