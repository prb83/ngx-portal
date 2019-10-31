import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: 'web',
    loadChildren:
      './../../../ngx-portal-web/src/app/pages/pages.module#PagesModule',
  },
  { path: '', redirectTo: 'web', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
