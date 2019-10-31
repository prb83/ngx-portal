import { Action } from '@ngrx/store'

export const CMS_SET_CURRENT_PAGE_DATA =
  '[NgxPortalCMS] set current page in view data'
export const CMS_SET_PAGES_DATA = '[NgxPortalCMS] set all pages to store'
export const CMS_RESET_CURRENT_PAGE_DATA =
  '[NgxPortalCMS] set current page value back to null'
export const CMS_PREVIEW_SET_OPEN = '[NgxPortalCMS] open preview'
export const CMS_PREVIEW_SET_CLOSE = '[NgxPortalCMS] close preview'
export const CMS_SET_NEW_PAGE = '[NgxPortalCMS] set option to add page'
export const CMS_SET_UPDATE_PAGE = '[NgxPortalCMS] set option to update page'
export const CMS_PREVIEW_SWITCH_STATE = '[NgxPortalCMS] switch open/close state'
export const CMS_SET_PAGE_ISVALID =
  '[NgxPortalCMS] set if content of page is valid and ready to save'
export const RIGHT_PANEL_CMS_SET_TAG_TYPE =
  '[NgxPortalApp-RightPanel-CMS] Set wrapper tag'
export const RIGHT_PANEL_CMS_RESET_TAG_TYPE =
  '[NgxPortalApp-RightPanel-CMS] Set tag to null'
export const RIGHT_PANEL_CMS_SET_METATEMPLATE =
  '[NgxPortalApp-RightPanel-CMS] Set default meta with template'

export class CmsSetCurrentPageData implements Action {
  readonly type = CMS_SET_CURRENT_PAGE_DATA
  constructor(public payload: any) {}
}
export class CmsSetPagesData implements Action {
  readonly type = CMS_SET_PAGES_DATA
  constructor(public payload: Array<any>) {}
}
export class CmsResetCurrentPageData implements Action {
  readonly type = CMS_RESET_CURRENT_PAGE_DATA
  constructor() {}
}

export class CmsPreviewSetOpen implements Action {
  readonly type = CMS_PREVIEW_SET_OPEN
  constructor() {}
}
export class CmsPreviewSetClose implements Action {
  readonly type = CMS_PREVIEW_SET_CLOSE
  constructor() {}
}
export class CmsSetNewPage implements Action {
  readonly type = CMS_SET_NEW_PAGE
  constructor() {}
}
export class CmsSetUpdatePage implements Action {
  readonly type = CMS_SET_UPDATE_PAGE
  constructor() {}
}
export class CmsPreviewSwitchState implements Action {
  readonly type = CMS_PREVIEW_SWITCH_STATE
  constructor() {}
}

export class CmsSetPageIsValidState implements Action {
  readonly type = CMS_SET_PAGE_ISVALID
  constructor(public payload: boolean) {}
}
export class RightPanelCmsSetTag implements Action {
  readonly type = RIGHT_PANEL_CMS_SET_TAG_TYPE
  constructor(public payload: string) {}
}
export class RightPanelCmsResetTag implements Action {
  readonly type = RIGHT_PANEL_CMS_RESET_TAG_TYPE
  constructor() {}
}
export class RightPanelCmsSetMetaTemplate implements Action {
  readonly type = RIGHT_PANEL_CMS_SET_METATEMPLATE
  constructor(public payload: any) {}
}

export type NgxCmsActions =
  | CmsSetCurrentPageData
  | CmsSetPagesData
  | CmsResetCurrentPageData
  | CmsPreviewSetOpen
  | CmsPreviewSetClose
  | CmsSetNewPage
  | CmsSetUpdatePage
  | CmsPreviewSwitchState
  | CmsSetPageIsValidState
  | RightPanelCmsSetTag
  | RightPanelCmsResetTag
  | RightPanelCmsSetMetaTemplate
