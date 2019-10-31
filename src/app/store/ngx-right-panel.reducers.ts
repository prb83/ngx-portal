import * as Actions from './ngx-right-panel.actions'

export interface NgxRightPanelStateInterface {
  right_panel_open: boolean
  right_panel_type: string
}

const initialState: NgxRightPanelStateInterface = {
  right_panel_open: false,
  right_panel_type: '',
}

export function ngxRightPanelReducer(
  state = initialState,
  action: Actions.NgxRightPanelActions
) {
  switch (action.type) {
    case Actions.RIGHT_PANEL_SET_OPEN:
      return {
        ...state,
        right_panel_open: true,
      }
    case Actions.RIGHT_PANEL_SET_CLOSE:
      return {
        ...state,
        right_panel_open: false,
      }
    case Actions.RIGHT_PANEL_SWITCH:
      return {
        ...state,
        right_panel_open: !state.right_panel_open,
      }
    case Actions.RIGHT_PANEL_SET_TYPE:
      return {
        ...state,
        right_panel_type: action.payload,
      }

    default:
      return state
  }
}

export const getRightPanelOpen = (state: NgxRightPanelStateInterface) =>
  state.right_panel_open
export const getRightPanelType = (state: NgxRightPanelStateInterface) =>
  state.right_panel_type
