import { Action } from '@ngrx/store'

export const POPOVER_MANAGER_VISIBLE = '[PopoverManager] Visible State'
export const POPOVER_MANAGER_SET_OPEN = '[PopoverManager] Open Window'
export const POPOVER_MANAGER_SET_CLOSE = '[PopoverManager] Close Window'
export const POPOVER_MANAGER_SET_CONTENT = '[PopoverManager] Set content'
export const POPOVER_MANAGER_SET_HEADLINE =
  '[PopoverManager] Set window headline'
export const POPOVER_MANAGER_SET_SELECTED_VALUE =
  '[PopoverManager] Set selected value'
export const POPOVER_MANAGER_RESET_SELECTED_VALUE =
  '[PopoverManager] Reset selected value'

export class PopoverManagerSetOpen implements Action {
  readonly type = POPOVER_MANAGER_SET_OPEN

  constructor() {}
}
export class PopoverManagerSetClose implements Action {
  readonly type = POPOVER_MANAGER_SET_CLOSE

  constructor() {}
}
export class PopoverManagerSetContent implements Action {
  readonly type = POPOVER_MANAGER_SET_CONTENT

  constructor(public payload: { content: Array<any>; headline: string }) {}
}
export class PopoverManagerSetSelectedValue implements Action {
  readonly type = POPOVER_MANAGER_SET_SELECTED_VALUE

  constructor(public payload: string) {}
}
export class PopoverManagerResetSelectedValue implements Action {
  readonly type = POPOVER_MANAGER_RESET_SELECTED_VALUE

  constructor() {}
}
export type NgxPopoverManagerActions =
  | PopoverManagerSetOpen
  | PopoverManagerSetClose
  | PopoverManagerSetContent
  | PopoverManagerSetSelectedValue
  | PopoverManagerResetSelectedValue
