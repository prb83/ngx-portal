import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store'
// import * as fromWeather from './ngx-weather.reducers'
import * as ngxStore from 'projects/ngx-core/src/public_api'

export interface State {
  app: ngxStore.NgxAppStateInterface
  cms: ngxStore.NgxCmsStateInterface
  weather: ngxStore.NgxWeatherStateInterface
  todo: ngxStore.NgxTodoStateInterface
  popover: ngxStore.NgxPopoverManagerStateInterface
  rightpanel: ngxStore.NgxRightPanelStateInterface
  meida: ngxStore.NgxMediaStateInterface
}
// check if State as param works. conflict with type definitions
// export const reducers: ActionReducerMap<State> = {
export const reducers: ActionReducerMap<any> = {
  app: ngxStore.ngxAppReducer,
  cms: ngxStore.ngxCmsReducer,
  weather: ngxStore.ngxWeatherReducer,
  todo: ngxStore.ngxTodoReducer,
  popover: ngxStore.ngxPopoverManagerReducer,
  rightpanel: ngxStore.ngxRightPanelReducer,
  media: ngxStore.ngxMediaReducer,
}

/** ============================================================================
 * app module
 *
 =============================================================================*/

export const getAppState = createFeatureSelector<ngxStore.NgxAppStateInterface>(
  'app'
)

export const getHeaderHeadline = createSelector(
  getAppState,
  ngxStore.getHeaderHeadline
)
export const getContentFilter = createSelector(
  getAppState,
  ngxStore.getContentFilter
)

export const getQuickEditViewIsOpen = createSelector(
  getAppState,
  ngxStore.getQuickEditViewOpen
)
export const getOverlayIsActive = createSelector(
  getAppState,
  ngxStore.getOverlayActive
)
export const getSpinnerIsActive = createSelector(
  getAppState,
  ngxStore.getSpinnerActive
)
export const getSideNavigationActive = createSelector(
  getAppState,
  ngxStore.getSideNavigationActive
)
export const getQuickEditBarActive = createSelector(
  getAppState,
  ngxStore.getQuickEditBarActive
)
export const getFullSize = createSelector(getAppState, ngxStore.getFullSize)
/** ============================================================================
 * user
 *
 =============================================================================*/
export const getUser = createSelector(getAppState, ngxStore.getUser)
/** ============================================================================
 * popover manager
 *
 =============================================================================*/
export const getPopoverManagerState = createFeatureSelector<
  ngxStore.NgxPopoverManagerStateInterface
>('popover')
export const getIsPopoverManagerViewOpen = createSelector(
  getPopoverManagerState,
  ngxStore.getPopoverManagerOpen
)
export const getPopoverManagerContent = createSelector(
  getPopoverManagerState,
  ngxStore.getPopoverManagerContent
)
export const getPopoverManagerSelectedValue = createSelector(
  getPopoverManagerState,
  ngxStore.getPopoverManagerSelectedValue
)
export const getPopoverManagerHeadline = createSelector(
  getPopoverManagerState,
  ngxStore.getPopoverManagerHeadline
)

/** ============================================================================
 * right panel
 *
 =============================================================================*/
export const getRightPanelState = createFeatureSelector<
  ngxStore.NgxRightPanelStateInterface
>('rightpanel')

export const getRightPanelOpen = createSelector(
  getRightPanelState,
  ngxStore.getRightPanelOpen
)
export const getRightPanelType = createSelector(
  getRightPanelState,
  ngxStore.getRightPanelType
)
/** ============================================================================
 * media module
 *
 =============================================================================*/
export const getMediaState = createFeatureSelector<
  ngxStore.NgxMediaStateInterface
>('media')

export const getMediaList = createSelector(getMediaState, ngxStore.getMediaList)
export const getMediaIsNew = createSelector(
  getMediaState,
  ngxStore.getMediaIsNew
)
export const getMediaDoubleIndex = createSelector(
  getMediaState,
  ngxStore.getMediaDoubleIndex
)
/** ============================================================================
 * cms
 *
 =============================================================================*/
export const getCmsState = createFeatureSelector<ngxStore.NgxCmsStateInterface>(
  'cms'
)
export const getRightPanelCmsChoosenTag = createSelector(
  getCmsState,
  ngxStore.getRightPanelCmsTag
)
export const getRightPanelCmsMetaTemplate = createSelector(
  getCmsState,
  ngxStore.getRightPanelCmsMetaTemplate
)
export const getCmsCurrentPageData = createSelector(
  getCmsState,
  ngxStore.getCmsCurrentPageValue
)
export const getCmsPagesData = createSelector(
  getCmsState,
  ngxStore.getCmsPagesData
)
export const getCmsPreviewIsActive = createSelector(
  getCmsState,
  ngxStore.getCmsPreviewIsActive
)
export const getCmsIsCreatePage = createSelector(
  getCmsState,
  ngxStore.getCmsCreatePage
)
export const getCmsPageIsValidState = createSelector(
  getCmsState,
  ngxStore.getCmsPageIsValidState
)
/** ============================================================================
 * todo module
 *
 =============================================================================*/
export const getTodoState = createFeatureSelector<
  ngxStore.NgxTodoStateInterface
>('todo')
export const getTodos = createSelector(getTodoState, ngxStore.getTodos)
export const getTodosTypeCategory = createSelector(
  getTodoState,
  ngxStore.getTodosTypeCategory
)
export const getTodosTypeProject = createSelector(
  getTodoState,
  ngxStore.getTodosTypeProject
)
export const getTodoCategories = createSelector(
  getTodoState,
  ngxStore.getTodoCategories
)
export const getTodoProjects = createSelector(
  getTodoState,
  ngxStore.getTodoProjects
)
export const getTodoFeaturesUser = createSelector(
  getTodoState,
  ngxStore.getTodoFeaturesUser
)
export const getTodoFilter = createSelector(
  getTodoState,
  ngxStore.getTodoFilter
)
export const getTodoColor = createSelector(getTodoState, ngxStore.getTodoColor)
export const getTodoDetail = createSelector(
  getTodoState,
  ngxStore.getTodoDetail
)

export const getTodoRelations = createSelector(
  getTodoState,
  ngxStore.getTodoRelations
)
export const getTodoKindOf = createSelector(
  getTodoState,
  ngxStore.getTodoKindOf
)
export const getTodoRepeat = createSelector(
  getTodoState,
  ngxStore.getTodoRepeat
)
export const getTodoDoTime = createSelector(
  getTodoState,
  ngxStore.getTodoDoTime
)
export const getTodoEnumProps = createSelector(
  getTodoState,
  ngxStore.getTodoEnumProps
)

export const getActiveProject = createSelector(
  getTodoState,
  ngxStore.getActiveProject
)
// export const getActiveCategory = createSelector(
//   getTodoState,
//   ngxStore.getActiveCategory
// )
export const getActiveType = createSelector(
  getTodoState,
  ngxStore.getActiveType
)
