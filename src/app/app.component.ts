import { Component } from '@angular/core'
import { PagesWebService } from 'projects/ngx-components/src/public_api'
import { PortalWebConfiguration } from './config/header-config.model'

@Component({
  selector: 'ngx-portal-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'portal-web'
  headerConfig: any
  config: any
  navItems = [
    { name: 'Nangex Web', active: true, destination: '/web' },
    { name: 'Nangex App', active: false, destination: '/app' },
    { name: 'Account', active: false, destination: '/app/user' },
  ]
  // categoryList: Array<PageBasicInterface>
  constructor(private _pagesWebService: PagesWebService) {
    this.headerConfig = new PortalWebConfiguration().headerConfig
    // this._pagesWebService.getMainCategories().subscribe(categories => {
    // this.categoryList = categories
    // })
  }
}
