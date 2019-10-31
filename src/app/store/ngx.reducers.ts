import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store'
import * as fromApp from './ngx-app.reducers'
import * as fromCms from './ngx-cms.reducers'
import * as fromMedia from './ngx-media.reducers'
import * as fromPopoverManager from './ngx-popover.reducers'
import * as fromRightPanel from './ngx-right-panel.reducers'
import * as fromTodo from './ngx-todo.reducers'
import * as fromWeather from './ngx-weather.reducers'

export interface State {
  app: fromApp.NgxAppStateInterface
  cms: fromCms.NgxCmsStateInterface
  weather: fromWeather.NgxWeatherStateInterface
  todo: fromTodo.NgxTodoStateInterface
  popover: fromPopoverManager.NgxPopoverManagerStateInterface
  rightpanel: fromRightPanel.NgxRightPanelStateInterface
  meida: fromMedia.NgxMediaStateInterface
}
// check if State as param works. conflict with type definitions
// export const reducers: ActionReducerMap<State> = {
export const reducers: ActionReducerMap<any> = {
  app: fromApp.ngxAppReducer,
  cms: fromCms.ngxCmsReducer,
  weather: fromWeather.ngxWeatherReducer,
  todo: fromTodo.ngxTodoReducer,
  popover: fromPopoverManager.ngxPopoverManagerReducer,
  rightpanel: fromRightPanel.ngxRightPanelReducer,
  media: fromMedia.ngxMediaReducer,
}

/** ============================================================================
 * app module
 *
 =============================================================================*/

export const getAppState = createFeatureSelector<fromApp.NgxAppStateInterface>(
  'app'
)

export const getHeaderHeadline = createSelector(
  getAppState,
  fromApp.getHeaderHeadline
)
export const getContentFilter = createSelector(
  getAppState,
  fromApp.getContentFilter
)

export const getQuickEditViewIsOpen = createSelector(
  getAppState,
  fromApp.getQuickEditViewOpen
)
export const getOverlayIsActive = createSelector(
  getAppState,
  fromApp.getOverlayActive
)
export const getSpinnerIsActive = createSelector(
  getAppState,
  fromApp.getSpinnerActive
)
export const getSideNavigationActive = createSelector(
  getAppState,
  fromApp.getSideNavigationActive
)
export const getQuickEditBarActive = createSelector(
  getAppState,
  fromApp.getQuickEditBarActive
)
export const getFullSize = createSelector(getAppState, fromApp.getFullSize)
/** ============================================================================
 * user
 *
 =============================================================================*/
export const getUser = createSelector(getAppState, fromApp.getUser)
/** ============================================================================
 * popover manager
 *
 =============================================================================*/
export const getPopoverManagerState = createFeatureSelector<
  fromPopoverManager.NgxPopoverManagerStateInterface
>('popover')
export const getIsPopoverManagerViewOpen = createSelector(
  getPopoverManagerState,
  fromPopoverManager.getPopoverManagerOpen
)
export const getPopoverManagerContent = createSelector(
  getPopoverManagerState,
  fromPopoverManager.getPopoverManagerContent
)
export const getPopoverManagerSelectedValue = createSelector(
  getPopoverManagerState,
  fromPopoverManager.getPopoverManagerSelectedValue
)
export const getPopoverManagerHeadline = createSelector(
  getPopoverManagerState,
  fromPopoverManager.getPopoverManagerHeadline
)

/** ============================================================================
 * right panel
 *
 =============================================================================*/
export const getRightPanelState = createFeatureSelector<
  fromRightPanel.NgxRightPanelStateInterface
>('rightpanel')

export const getRightPanelOpen = createSelector(
  getRightPanelState,
  fromRightPanel.getRightPanelOpen
)
export const getRightPanelType = createSelector(
  getRightPanelState,
  fromRightPanel.getRightPanelType
)
/** ============================================================================
 * media module
 *
 =============================================================================*/
export const getMediaState = createFeatureSelector<
  fromMedia.NgxMediaStateInterface
>('media')

export const getMediaList = createSelector(
  getMediaState,
  fromMedia.getMediaList
)
export const getMediaIsNew = createSelector(
  getMediaState,
  fromMedia.getMediaIsNew
)
export const getMediaDoubleIndex = createSelector(
  getMediaState,
  fromMedia.getMediaDoubleIndex
)
/** ============================================================================
 * cms
 *
 =============================================================================*/
export const getCmsState = createFeatureSelector<fromCms.NgxCmsStateInterface>(
  'cms'
)
export const getRightPanelCmsChoosenTag = createSelector(
  getCmsState,
  fromCms.getRightPanelCmsTag
)
export const getRightPanelCmsMetaTemplate = createSelector(
  getCmsState,
  fromCms.getRightPanelCmsMetaTemplate
)
export const getCmsCurrentPageData = createSelector(
  getCmsState,
  fromCms.getCmsCurrentPageValue
)
export const getCmsPagesData = createSelector(
  getCmsState,
  fromCms.getCmsPagesData
)
export const getCmsPreviewIsActive = createSelector(
  getCmsState,
  fromCms.getCmsPreviewIsActive
)
export const getCmsIsCreatePage = createSelector(
  getCmsState,
  fromCms.getCmsCreatePage
)
export const getCmsPageIsValidState = createSelector(
  getCmsState,
  fromCms.getCmsPageIsValidState
)
/** ============================================================================
 * todo module
 *
 =============================================================================*/
export const getTodoState = createFeatureSelector<
  fromTodo.NgxTodoStateInterface
>('todo')
export const getTodos = createSelector(getTodoState, fromTodo.getTodos)
export const getTodosTypeCategory = createSelector(
  getTodoState,
  fromTodo.getTodosTypeCategory
)
export const getTodosTypeProject = createSelector(
  getTodoState,
  fromTodo.getTodosTypeProject
)
export const getTodoCategories = createSelector(
  getTodoState,
  fromTodo.getTodoCategories
)
export const getTodoProjects = createSelector(
  getTodoState,
  fromTodo.getTodoProjects
)
export const getTodoFeaturesUser = createSelector(
  getTodoState,
  fromTodo.getTodoFeaturesUser
)
export const getTodoFilter = createSelector(
  getTodoState,
  fromTodo.getTodoFilter
)
export const getTodoColor = createSelector(getTodoState, fromTodo.getTodoColor)
export const getTodoDetail = createSelector(
  getTodoState,
  fromTodo.getTodoDetail
)

export const getTodoRelations = createSelector(
  getTodoState,
  fromTodo.getTodoRelations
)
export const getTodoKindOf = createSelector(
  getTodoState,
  fromTodo.getTodoKindOf
)
export const getTodoRepeat = createSelector(
  getTodoState,
  fromTodo.getTodoRepeat
)
export const getTodoDoTime = createSelector(
  getTodoState,
  fromTodo.getTodoDoTime
)
export const getTodoEnumProps = createSelector(
  getTodoState,
  fromTodo.getTodoEnumProps
)

export const getActiveProject = createSelector(
  getTodoState,
  fromTodo.getActiveProject
)
// export const getActiveCategory = createSelector(
//   getTodoState,
//   fromTodo.getActiveCategory
// )
export const getActiveType = createSelector(
  getTodoState,
  fromTodo.getActiveType
)
