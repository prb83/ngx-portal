import * as Actions from './ngx-app.actions'

export interface NgxAppStateInterface {
  app_overlay_isactive: boolean
  app_spinner_isactive: boolean
  app_quickedit_isactive: boolean
  app_quickedit_actionbar_isactive: boolean
  app_sidebar_isactive: boolean
  app_header_headline: Array<string>
  app_fullsize: boolean
  content: {
    headline: string
    filter: string
  }

  rightPanel: {
    open: boolean
    type: string
  }
  user: any
}

const initialState: NgxAppStateInterface = {
  app_overlay_isactive: false,
  app_spinner_isactive: false,
  app_quickedit_isactive: false,
  app_quickedit_actionbar_isactive: false,
  app_sidebar_isactive: false,
  app_fullsize: false,
  app_header_headline: ['Nangex-Portal'],
  content: {
    headline: '',
    filter: '',
  },

  rightPanel: {
    open: false,
    type: '',
  },
  user: null,
}

// const getAllTodos = createFeatureSelector('todos')
// const getCurrentTodos = createSelector(
//     getAllTodos,
//     todos => todos.filter(t => t.isActive)
// )

export function ngxAppReducer(
  state = initialState,
  action: Actions.NgxAppActions
) {
  switch (action.type) {
    case Actions.RESET_HEADER_HEADLINE:
      return {
        ...state,
        app_header_headline: initialState.app_header_headline,
      }
    case Actions.SET_HEADER_HEADLINE:
      return {
        ...state,
        app_header_headline: [...state.app_header_headline, action.payload],
      }
    case Actions.CONTENT_FILTER:
      return {
        ...state,
        content: {
          headline: state.content.headline,
          filter: action.payload,
        },
      }
    case Actions.SWITCH_FULLSIZE:
      return {
        ...state,
        app_fullsize: !state.app_fullsize,
      }

    case Actions.QUICKEDITVIEW_SET_OPEN:
      return {
        ...state,
        app_quickedit_isactive: true,
      }
    case Actions.QUICKEDITVIEW_SET_CLOSE:
      return {
        ...state,
        app_quickedit_isactive: false,
      }
    case Actions.OVERLAY_SET_OPEN:
      return {
        ...state,
        app_overlay_isactive: true,
      }
    case Actions.OVERLAY_SET_CLOSE:
      return {
        ...state,
        app_overlay_isactive: false,
      }
    case Actions.SPINNER_SET_OPEN:
      return {
        ...state,
        app_spinner_isactive: true,
      }
    case Actions.SPINNER_SET_CLOSE:
      return {
        ...state,
        app_spinner_isactive: false,
      }
    case Actions.SIDENAVIGATION_SET_OPEN:
      return {
        ...state,
        app_sidebar_isactive: true,
      }
    case Actions.SIDENAVIGATION_SET_CLOSE:
      return {
        ...state,
        app_sidebar_isactive: false,
      }
    case Actions.SIDENAVIGATION_SWITCH:
      return {
        ...state,
        app_sidebar_isactive: !state.app_sidebar_isactive,
      }

    case Actions.QUICKEDIT_ACTIONBAR_SET_OPEN:
      return {
        ...state,
        app_quickedit_actionbar_isactive: true,
      }

    case Actions.QUICKEDIT_ACTIONBAR_SET_CLOSE:
      return {
        ...state,
        app_quickedit_actionbar_isactive: false,
      }

    case Actions.USER_SETTINGS:
      return {
        ...state,
        user: action.payload,
      }

    default:
      return state
  }
}

export const getHeaderHeadline = (state: NgxAppStateInterface) =>
  state.app_header_headline
export const getContentFilter = (state: NgxAppStateInterface) =>
  state.content.filter
export const getQuickEditViewOpen = (state: NgxAppStateInterface) =>
  state.app_quickedit_isactive
export const getOverlayActive = (state: NgxAppStateInterface) =>
  state.app_overlay_isactive
export const getSpinnerActive = (state: NgxAppStateInterface) =>
  state.app_spinner_isactive
export const getSideNavigationActive = (state: NgxAppStateInterface) =>
  state.app_sidebar_isactive

export const getQuickEditBarActive = (state: NgxAppStateInterface) =>
  state.app_quickedit_actionbar_isactive
export const getFullSize = (state: NgxAppStateInterface) => state.app_fullsize

export const getUser = (state: NgxAppStateInterface) => state.user
