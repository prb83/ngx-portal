import { Action } from '@ngrx/store'
export const SET_HEADER_HEADLINE =
  '[NgxApp] set headline for header (array of strings)'
export const RESET_HEADER_HEADLINE = '[NgxApp] reset value to initialstate'
export const CONTENT_FILTER = '[NgxApp] CONTENT_FILTER'
export const SWITCH_FULLSIZE = '[NgxApp] switch navigation and content size'
export const CONTENT_TODOS = '[NgxApp] CONTENT_TODOS'
export const USER_FEATURES = '[NgxApp] USER_FEATURES'

export const QUICKEDIT_ACTIONBAR_SET_OPEN =
  '[NgxApp-Quickedit-Actionbar] set action bar to visible'
export const QUICKEDIT_ACTIONBAR_SET_CLOSE =
  '[NgxApp-Quickedit-Actionbar] set action bar to hidden'
export const QUICKEDITVIEW_SET_OPEN = '[NgxApp-Quickedit] open quick edit'
export const QUICKEDITVIEW_SET_CLOSE = '[NgxApp-Quickedit] close quick edit'
export const OVERLAY_SET_OPEN = '[NgxApp] close quick '
export const OVERLAY_SET_CLOSE = '[NgxApp] close quick '
export const SPINNER_SET_OPEN = '[NgxApp] open spinner '
export const SPINNER_SET_CLOSE = '[NgxApp] close spinner '

export const STATUSBARTASKVIEW_OPEN = '[Ngx-App] STATUSBARTASKVIEW_OPEN'
/** ============================================================================
 * sidebar / feature nav
 *
 =============================================================================*/
export const SIDENAVIGATION_SET_OPEN = '[NgxApp] Navigation set open'
export const SIDENAVIGATION_SET_CLOSE = '[NgxApp] Navigation set close'
export const SIDENAVIGATION_SWITCH = '[NgxApp] Navigation switch state'
export const FEATURENAV_ACTIVE = '[NgxApp] FEATURENAV_ACTIVE'
export const FEATURENAV_HEADLINE = '[NgxApp] FEATURENAV_HEADLINE'
export const FEATURENAV_CONTENT = '[NgxApp] FEATURENAV_CONTENT'
export const FEATURENAV_LIST = '[NgxApp] FEATURENAV_LIST'
export const FEATURENAV_ACTIONS = '[NgxApp] FEATURENAV_ACTIONS'
/** ============================================================================
 * popover manager
 *
 =============================================================================*/
// export const POPOVERMANAGER_OPEN = 'POPOVERMANAGER_OPEN'
// export const POPOVERMANAGER_CONTENT = 'POPOVERMANAGER_CONTENT'
// export const POPOVERMANAGER_SELECTED = 'POPOVERMANAGER_SELECTED'
/** ============================================================================
 * user
 *
 =============================================================================*/
export const USER_SETTINGS = 'USER_SETTINGS'

/** ============================================================================
 * content classes
 *
 =============================================================================*/
export class SetHeaderHeadline implements Action {
  readonly type = SET_HEADER_HEADLINE

  constructor(public payload: string) {}
}
export class SwitchFullsize implements Action {
  readonly type = SWITCH_FULLSIZE

  constructor() {}
}
export class ResetHeaderHeadline implements Action {
  readonly type = RESET_HEADER_HEADLINE

  constructor() {}
}
export class ContentFilter implements Action {
  readonly type = CONTENT_FILTER

  constructor(public payload: string) {}
}
/** ============================================================================
 * Quick edit
 *
 =============================================================================*/
// app_quickedit_actionbar_isactive
export class QuickEditActionBarSetOpen implements Action {
  readonly type = QUICKEDIT_ACTIONBAR_SET_OPEN
  constructor() {}
}
export class QuickEditActionBarSetClose implements Action {
  readonly type = QUICKEDIT_ACTIONBAR_SET_CLOSE
  constructor() {}
}
export class StatusbarTaskViewOpen implements Action {
  readonly type = STATUSBARTASKVIEW_OPEN

  constructor(public payload: boolean) {}
}
export class QuickEditViewSetOpen implements Action {
  readonly type = QUICKEDITVIEW_SET_OPEN

  constructor() {}
}
export class QuickEditViewSetClose implements Action {
  readonly type = QUICKEDITVIEW_SET_CLOSE

  constructor() {}
}
/** ============================================================================
 * Qverlay
 *
 =============================================================================*/

export class OverlaySetOpen implements Action {
  readonly type = OVERLAY_SET_OPEN

  constructor() {}
}
export class OverlaySetClose implements Action {
  readonly type = OVERLAY_SET_CLOSE

  constructor() {}
}
/** ============================================================================
 * Spinner
 *
 =============================================================================*/

export class SpinnerSetOpen implements Action {
  readonly type = SPINNER_SET_OPEN

  constructor() {}
}
export class SpinnerSetClose implements Action {
  readonly type = SPINNER_SET_CLOSE

  constructor() {}
}
/** ============================================================================
 * Navigation
 *
 =============================================================================*/

export class SideNavigationSetOpen implements Action {
  readonly type = SIDENAVIGATION_SET_OPEN

  constructor() {}
}
export class SideNavigationSetSetClose implements Action {
  readonly type = SIDENAVIGATION_SET_CLOSE

  constructor() {}
}
export class SideNavigationSwitch implements Action {
  readonly type = SIDENAVIGATION_SWITCH

  constructor() {}
}

/** ============================================================================
 * infoview classes
 *
 =============================================================================*/

/** ============================================================================
 * user classes
 *
 =============================================================================*/
export class UserSettings implements Action {
  readonly type = USER_SETTINGS

  constructor(public payload: any) {}
}
export type NgxAppActions =
  | ResetHeaderHeadline
  | SetHeaderHeadline
  | ContentFilter
  | SwitchFullsize
  | QuickEditActionBarSetOpen
  | QuickEditActionBarSetClose
  | QuickEditViewSetOpen
  | QuickEditViewSetClose
  | OverlaySetOpen
  | OverlaySetClose
  | SpinnerSetOpen
  | SpinnerSetClose
  | SideNavigationSetOpen
  | SideNavigationSetSetClose
  | SideNavigationSwitch
  | UserSettings
