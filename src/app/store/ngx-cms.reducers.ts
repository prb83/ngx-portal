import * as Actions from './ngx-cms.actions'

export interface NgxCmsStateInterface {
  // cms_current_page_value: PageBasicInterface
  cms_current_page_value: any
  cms_pages: Array<any>
  cms_preview_open: boolean
  cms_create_page: boolean
  cms_page_is_valid: boolean
  right_panel_cms_tag: string
  right_panel_cms_meta: string
  right_panel_cms_stage: string
  right_panel_cms_content: string
}

const initialState: NgxCmsStateInterface = {
  // cms_current_page_value: new NgxPageBasic(),
  cms_current_page_value: null,
  cms_pages: [],
  cms_preview_open: false,
  cms_create_page: false,
  cms_page_is_valid: true,
  right_panel_cms_tag: null,
  right_panel_cms_meta: null,
  right_panel_cms_stage: null,
  right_panel_cms_content: null,
}

export function ngxCmsReducer(
  state = initialState,
  action: Actions.NgxCmsActions
) {
  switch (action.type) {
    case Actions.CMS_SET_CURRENT_PAGE_DATA:
      return {
        ...state,
        cms_current_page_value: action.payload,
      }
    case Actions.CMS_SET_PAGES_DATA:
      return {
        ...state,
        cms_pages: action.payload,
      }
    case Actions.CMS_RESET_CURRENT_PAGE_DATA:
      return {
        ...state,
        cms_current_page_value: null,
      }
    case Actions.CMS_PREVIEW_SET_OPEN:
      return {
        ...state,
        cms_preview_open: true,
      }
    case Actions.CMS_PREVIEW_SET_CLOSE:
      return {
        ...state,
        cms_preview_open: false,
      }
    case Actions.CMS_PREVIEW_SWITCH_STATE:
      return {
        ...state,
        cms_preview_open: !state.cms_preview_open,
      }
    case Actions.CMS_SET_NEW_PAGE:
      return {
        ...state,
        cms_create_page: true,
      }
    case Actions.CMS_SET_UPDATE_PAGE:
      return {
        ...state,
        cms_create_page: false,
      }
    case Actions.CMS_SET_PAGE_ISVALID:
      return {
        ...state,
        cms_page_is_valid: action.payload,
      }
    case Actions.RIGHT_PANEL_CMS_SET_TAG_TYPE:
      return {
        ...state,
        right_panel_cms_tag: action.payload,
      }
    case Actions.RIGHT_PANEL_CMS_RESET_TAG_TYPE:
      return {
        ...state,
        right_panel_cms_tag: null,
      }
    case Actions.RIGHT_PANEL_CMS_SET_METATEMPLATE:
      return {
        ...state,
        right_panel_cms_meta: action.payload,
      }

    default:
      return state
  }
}

export const getRightPanelCmsTag = (state: NgxCmsStateInterface) =>
  state.right_panel_cms_tag
export const getRightPanelCmsMetaTemplate = (state: NgxCmsStateInterface) =>
  state.right_panel_cms_meta
export const getCmsCurrentPageValue = (state: NgxCmsStateInterface) =>
  state.cms_current_page_value
export const getCmsPagesData = (state: NgxCmsStateInterface) => state.cms_pages
export const getCmsPreviewIsActive = (state: NgxCmsStateInterface) =>
  state.cms_preview_open
export const getCmsCreatePage = (state: NgxCmsStateInterface) =>
  state.cms_create_page
export const getCmsPageIsValidState = (state: NgxCmsStateInterface) =>
  state.cms_page_is_valid
