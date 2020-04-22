import { Component, OnInit } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { HeaderLink } from 'projects/ngx-components/src/lib/header/header'
import * as Actions from 'projects/ngx-core/src/public_api'
import { NgxAuthService } from 'projects/ngx-core/src/public_api'
import * as fromNgxRoot from './store/ngx.reducers'
import {
  PagesWebService,
  UiService,
} from 'projects/ngx-components/src/public_api'
import { UpdateworkerService } from './updateworker.service'
import { ModalTestService } from 'projects/ngx-components/src/lib/modal-test.service'

@Component({
  selector: 'ngx-portal-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
  // @description:
  config: any
  //  @description: view templates for web or app
  portalView = 'app'
  // @description: items in topbar for topics of blog
  portalTopics$ = this._pagesWebService.getGqlApplicationTopicData()
  //  @description:  items for top navigation in header
  navItems: Array<HeaderLink> = [
    {
      name: 'Portal-Web',
      active: this.portalView.indexOf('web') > -1,
      destination: '/web',
      available: true,
      type: 'icon',
      iconName: 'fas fa-globe',
    },
    {
      name: 'Account',
      active: this.portalView.indexOf('app') > -1,
      destination: '/app/account',
      available: false,
      type: 'icon',
      iconName: 'far fa-user',
    },
  ]
  sideNavigationElements = [
    {
      prefix: 'fas',
      name: 'tachometer-alt',
      text: 'Control',
      isActive: false,
      link: '/app/dashboard',
      isVisible: true,
      hasChildren: false,
      asyncChildren: false,
      children: [],
    },
    {
      prefix: 'far',
      name: 'edit',
      text: `Todo's`,
      isActive: false,
      link: '/app/todo',
      isVisible: true,
      hasChildren: false,
      asyncChildren: true,
      children: [],
    },
    {
      prefix: 'fa',
      name: 'file',
      text: 'CMS',
      isActive: false,
      link: '/app/cms/overview',
      isVisible: true,
      hasChildren: false,
      asyncChildren: false,
      children: [
        {
          name: 'New Page',
          link: '/app/cms/create',
        },
      ],
    },
    {
      prefix: 'fas',
      name: 'camera',
      text: 'Media',
      isActive: false,
      link: '/app/media/overview',
      isVisible: true,
      hasChildren: false,
      asyncChildren: false,
      children: [],
    },
    {
      prefix: 'fas',
      name: 'sun',
      text: 'Wetter',
      isActive: false,
      link: '/app/weather',
      isVisible: true,
      hasChildren: false,
      asyncChildren: false,
      children: [],
    },
    {
      prefix: 'fas',
      name: 'book',
      text: 'Learn',
      isActive: false,
      link: '/app/learn',
      isVisible: true,
      hasChildren: false,
      asyncChildren: false,
      children: [],
    },
    {
      prefix: 'fas',
      name: 'info-circle',
      text: 'Info',
      isActive: false,
      link: '/app/info',
      isVisible: true,
      hasChildren: false,
      asyncChildren: false,
      children: [],
    },
  ]
  // @description: authentification state of user
  isAuthenticated$ = false
  showMenu = false
  constructor(
    private _router: Router,
    private _ngxAuthService: NgxAuthService,
    private store: Store<fromNgxRoot.State>,
    private _pagesWebService: PagesWebService,
    private _updateworkerService: UpdateworkerService,
    private _uiService: UiService,
    private _modalTestService: ModalTestService
  ) {}
  ngOnInit(): void {
    this._updateworkerService.acitvateWorkerUpdate()
    this._updateworkerService.checkWorkerUpdate()
    this._updateworkerService.checkWorkerAndReload()

    this._router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        this.initPortal(val.url)
      }
    })
    // check authentification state ( needed for app view )
    this._ngxAuthService.authStatus.subscribe(authStatus => {
      if (authStatus.isAuthenticated) {
        this.isAuthenticated$ = true
        this.navItems[1].available = true
      } else {
        this.isAuthenticated$ = false
        this.navItems[1].available = true
      }
      // this.loadSidebarConfig(authStatus.isAuthenticated)
      // this.loadCustomConfigForSidebar()
    })
    // this._uiService.showToast(`Update Available page will`, `Reload`)
  }
  /** ============================================================================
   * view methods
   *
   =============================================================================*/
  close = () => {
    this._modalTestService.closeModal()
  }
  open = () => {
    this._modalTestService.openModal('someurl')
  }
  encodeUri = (link: string): string => {
    return decodeURIComponent(link.toLowerCase().replace(' ', '-'))
  }
  /**
   * @description: currently set header ever to app only set active element to web or app
   * @memberOf AppComponent
   */
  initPortal = (url: string) => {
    if (url.indexOf('app') > -1) {
      this.portalView = 'app'
      this.setNavItemsActive(false, true, false)
      if (this.isAuthenticated$) {
        this.showMenu = true
      } else {
        this.showMenu = false
        this._ngxAuthService.redirectToLogin()
      }
    } else if (url.indexOf('web') > -1) {
      this.portalView = 'web'
      this.setNavItemsActive(true, false, false)
      this.showMenu = false
    }
  }
  /**
   * @description: set header links to visual active state for web app or user
   * @memberOf AppComponent
   */
  setNavItemsActive = (web: boolean, app: boolean, user: boolean) => {
    this.navItems[0].active = web
    this.navItems[1].active = app
  }
  /**
   * @description: set visible state of quick edit and hide detail view
   * @memberOf AppComponent
   */
  openQuickEdit = () => {
    this.store.dispatch(new Actions.TodoDetailReset())
    this.store.dispatch(new Actions.QuickEditViewSetOpen())
  }
  /**
   * @description: Dispatch navigagtion state
   * @memberOf AppComponent
   */
  fireNavigationState = () => {
    this.store.dispatch(new Actions.SideNavigationSwitch())
  }
}
