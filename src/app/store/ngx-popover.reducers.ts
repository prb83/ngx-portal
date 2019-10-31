import * as Actions from './ngx-popover.actions'

export interface NgxPopoverManagerStateInterface {
  popover_manager_open: boolean
  popover_manager_content: Array<any>
  popover_manager_window_headline: string
  popover_manager_selected_value: string
}

const initialState: NgxPopoverManagerStateInterface = {
  popover_manager_open: false,
  popover_manager_content: [],
  popover_manager_window_headline: '',
  popover_manager_selected_value: null,
}

export function ngxPopoverManagerReducer(
  state = initialState,
  action: Actions.NgxPopoverManagerActions
) {
  switch (action.type) {
    case Actions.POPOVER_MANAGER_SET_OPEN:
      return {
        ...state,
        popover_manager_open: true,
      }
    case Actions.POPOVER_MANAGER_SET_CLOSE:
      return {
        ...state,
        popover_manager_open: false,
      }
    case Actions.POPOVER_MANAGER_SET_CONTENT:
      return {
        ...state,
        popover_manager_content: [...action.payload.content],
        popover_manager_window_headline: action.payload.headline,
      }
    case Actions.POPOVER_MANAGER_SET_SELECTED_VALUE:
      return {
        ...state,
        popover_manager_selected_value: action.payload,
      }
    case Actions.POPOVER_MANAGER_RESET_SELECTED_VALUE:
      return {
        ...state,
        popover_manager_selected_value: '',
      }
    default:
      return state
  }
}

export const getPopoverManagerVisible = (
  state: NgxPopoverManagerStateInterface
) => state.popover_manager_open

export const getPopoverManagerOpen = (state: NgxPopoverManagerStateInterface) =>
  state.popover_manager_open
export const getPopoverManagerContent = (
  state: NgxPopoverManagerStateInterface
) => {
  return {
    content: state.popover_manager_content,
    headline: state.popover_manager_window_headline,
  }
}
export const getPopoverManagerHeadline = (
  state: NgxPopoverManagerStateInterface
) => state.popover_manager_window_headline
export const getPopoverManagerSelectedValue = (
  state: NgxPopoverManagerStateInterface
) => {
  return state.popover_manager_selected_value
}
