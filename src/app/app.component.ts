import { Component, OnInit } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { NgxAuthService } from 'projects/ngx-core/src/public_api'
import { PortalWebConfiguration } from './config/header-config.model'
import * as App from './store/ngx-app.actions'
import * as Todo from './store/ngx-todo.actions'
import * as fromNgxRoot from './store/ngx.reducers'

@Component({
  selector: 'ngx-portal-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
  // @description:
  headerConfig: any
  // @description:
  config: any
  //  @description: view templates for web or app
  portalView = 'web'
  //  @description:  items for top navigation in header
  navItems = [
    {
      name: 'Nangex Web',
      active: this.portalView.indexOf('web') > -1,
      destination: '/web',
      available: true,
    },
    {
      name: 'Nangex App',
      active: this.portalView.indexOf('app') > -1,
      destination: '/app',
      available: false,
    },
    {
      name: 'Account',
      active: this.portalView.indexOf('user') > -1,
      destination: '/app/login',
      available: true,
    },
  ]
  // @description: authentification state of user
  private isAuthenticated$ = false

  constructor(
    private _router: Router,
    private _ngxAuthService: NgxAuthService,
    private store: Store<fromNgxRoot.State>
  ) {
    this.headerConfig = new PortalWebConfiguration().headerConfig
  }
  ngOnInit(): void {
    // check url by navigationend to deside if app or web view
    this._router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        this.initPortal(val.url)
      }
    })
    /** ============================================================================
     * auth & helper
     *
     =============================================================================*/

    // check authentification state ( needed for app view )
    this._ngxAuthService.authStatus.subscribe(authStatus => {
      if (authStatus.isAuthenticated) {
        this.isAuthenticated$ = true
        this.navItems[1].available = true
      } else {
        this.isAuthenticated$ = false
        this.navItems[1].available = false
        // this._ngxAuthService.redirectToLogin()
      }
      // this.loadSidebarConfig(authStatus.isAuthenticated)
      // this.loadCustomConfigForSidebar()
    })
  }
  /** ============================================================================
   * view methods
   *
   =============================================================================*/
  initPortal = (url: string) => {
    if (url.indexOf('app') > -1 && this.portalView === 'web') {
      this.portalView = 'app'
      this.setNavItemsActive(false, true, false)
    } else if (url.indexOf('web') > -1 && this.portalView === 'app') {
      this.portalView = 'web'
      this.setNavItemsActive(true, false, false)
    }
  }
  setNavItemsActive = (web: boolean, app: boolean, user: boolean) => {
    this.navItems[0].active = web
    this.navItems[1].active = app
    this.navItems[2].active = user
  }
  openQuickEdit = () => {
    this.store.dispatch(new Todo.TodoDetailReset())
    this.store.dispatch(new App.QuickEditViewSetOpen())
  }
  fireNavigationState = () => {
    this.store.dispatch(new App.SideNavigationSwitch())
  }
}
