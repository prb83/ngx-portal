import { Action } from '@ngrx/store'

export const RIGHT_PANEL_SET_OPEN = '[NgxPortalApp-RightPanel] Set to open'
export const RIGHT_PANEL_SET_CLOSE = '[NgxPortalApp-RightPanel] Set to close'
export const RIGHT_PANEL_SWITCH =
  '[NgxPortalApp-RightPanel] Switch visible state'
export const RIGHT_PANEL_SET_TYPE = '[NgxPortalApp-RightPanel] Set panel type'

export class RightPanelSetOpen implements Action {
  readonly type = RIGHT_PANEL_SET_OPEN

  constructor() {}
}
export class RightPanelSetClose implements Action {
  readonly type = RIGHT_PANEL_SET_CLOSE

  constructor() {}
}

export class RightPanelSwitch implements Action {
  readonly type = RIGHT_PANEL_SWITCH

  constructor() {}
}
export class RightPanelSetType implements Action {
  readonly type = RIGHT_PANEL_SET_TYPE
  constructor(public payload: string) {}
}

export type NgxRightPanelActions =
  | RightPanelSetOpen
  | RightPanelSetClose
  | RightPanelSwitch
  | RightPanelSetType
