import * as Actions from './ngx-media.actions'

export interface NgxMediaStateInterface {
  media_list: Array<any>
  media_upload_new: boolean
  media_double_index: Number
}

const initialState: NgxMediaStateInterface = {
  media_list: [],
  media_upload_new: true,
  media_double_index: null,
}

export function ngxMediaReducer(
  state = initialState,
  action: Actions.NgxMediaActions
) {
  switch (action.type) {
    case Actions.MEDIA_SET_LIST:
      return {
        ...state,
        media_list: action.payload,
      }
    case Actions.MEDIA_SET_MEDIA_NEW_TRUE:
      return {
        ...state,
        media_upload_new: true,
      }
    case Actions.MEDIA_SET_MEDIA_NEW_FALSE:
      return {
        ...state,
        media_upload_new: false,
      }
    case Actions.MEDIA_SET_MEDIA_INDEX_DOUBLED:
      return {
        ...state,
        media_double_index: action.payload,
      }
    case Actions.MEDIA_RESET_MEDIA_INDEX_DOUBLED:
      return {
        ...state,
        media_double_index: null,
      }

    default:
      return state
  }
}

export const getMediaList = (state: NgxMediaStateInterface) => state.media_list
export const getMediaIsNew = (state: NgxMediaStateInterface) =>
  state.media_upload_new
export const getMediaDoubleIndex = (state: NgxMediaStateInterface) =>
  state.media_double_index
