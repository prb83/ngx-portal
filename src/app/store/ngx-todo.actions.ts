import { Action } from '@ngrx/store'
import { NgxTodoInterface } from 'projects/ngx-components/src/public_api'
export const TODOS_LOADED = '[Ngx-Todo] Identifier if todos are loaded'
export const TODO_CATEGORIES =
  '[Ngx-Todo] Discover this for detailed description'
export const TODO_DETAIL_CATEGORY = '[Ngx-Todo] TODO_CATEGORY'
export const TODO_PROJECTS = '[Ngx-Todo] TODO_PROJECTS'
export const TODO_DETAIL_PROJECT = '[Ngx-Todo] TODO_PROJECT'
export const TODO_FILTER = '[Ngx-Todo] TODO_FILTER'

export const SET_TO_UPDATE_USER_FEATURES =
  '[Ngx-Todo] Change User Features -> update via service call'

export const SET_ACTIVE_TODO_PROJECT = '[Ngx-Todo] Set active project'
export const SET_ACTIVE_TODO_CATEGORY = '[Ngx-Todo] Set active category'
export const SET_ACTIVE_TODO_TYPE = '[Ngx-Todo] Set active type cat or prj'
export const RESET_ACTIVE_TODO = '[Ngx-Todo] Reset todo to initial value'
export const TODO_FEATURES_CHANGE_NAME = '[Ngx-Todo] TODO_FEATURES_CHANGE_NAME'
export const TODO_FEATURES_CHANGE_ICON =
  '[Ngx-Todo] Change Feature Category icon'
export const TODO_FEATURES_CHANGE_COLOR =
  '[Ngx-Todo] Change Feature Category / Project color'
export const TODO_FEATURES_CHANGE_BG =
  '[Ngx-Todo] Change Feature Category / Project background color'
export const TODO_FEATURES_RESET_COLOR =
  '[Ngx-Todo] Change Feature Category / Project color'
export const TODO_FEATURES_RESET_BG =
  '[Ngx-Todo] Change Feature Category / Project background color'
export const TODOINPUT_CATEGORY =
  '[Ngx-Todo] Input field right panel to add category'
export const TODOINPUT_PROJECT =
  '[Ngx-Todo] Input field right panel to add project'

export const TODO_DETAIL = '[Ngx-Todo] TODO_DETAIL'
export const TODO_DETAIL_RESET = '[Ngx-Todo] TODO_DETAIL_RESET'
export const TODO_DETAIL_CREATE = '[Ngx-Todo] TODO_DETAIL_CREATE'
export const TODO_DETAIL_DOTIME = '[Ngx-Todo] Set in todo object the doTime'
export const TODO_DETAIL_DUEDATE = '[Ngx-Todo] Set in todo object the dueDate'
export const TODO_DETAIL_REPEAT =
  '[Ngx-Todo] Set in todo object the repeat interval'
export const TODO_DETAIL_PRIORITY = '[Ngx-Todo] Set in todo object the priority'
export const TODO_DETAIL_TEXT = '[Ngx-Todo] Set in todo object the detail text'
export const TODO_DETAIL_TITLE = '[Ngx-Todo] Set in todo object the title'
export const TODO_DETAIL_STATE = '[Ngx-Todo] Set in todo object the state'

/** EMUM VALUES */
export const TODO_RELATIONS =
  '[Ngx-Todo] stores possible relations (enum defined )'
export const TODO_KINDOF =
  '[Ngx-Todo] stores possible relations (enum defined )'
export const TODO_REPEAT =
  '[Ngx-Todo] stores possible repeat timers (enum defined )'
export const TODO_DOTIME = '[Ngx-Todo] stores possible do times (enum defined )'

/** ============================================================================
 * state view and filter
 *
 =============================================================================*/
export class TodosLoaded implements Action {
  readonly type = TODOS_LOADED

  constructor(public payload: Array<any>) {}
}

/**
 *
 * @description available categories for todos
 * @export
 * @class TodoCategories
 * @implements {Action}
 */
export class TodoCategories implements Action {
  readonly type = TODO_CATEGORIES

  constructor(public payload: any) {}
}
/**
 *
 * @description available projects for todos
 * @export
 * @class TodoProjects
 * @implements {Action}
 * @argument {payload}
 */
export class TodoProjects implements Action {
  readonly type = TODO_PROJECTS
  constructor(public payload: any) {}
}
/**
 *
 * @description current used filter for todos
 * @export
 * @class TodoFilter
 * @implements {Action}
 */
export class TodoFilter implements Action {
  readonly type = TODO_FILTER
  constructor(
    public payload: { name: string; index?: number; type?: string }
  ) {}
}

export class TodoFeaturesChangeName implements Action {
  readonly type = TODO_FEATURES_CHANGE_NAME

  constructor(public payload: any) {}
}
export class TodoFeaturesChangeColor implements Action {
  readonly type = TODO_FEATURES_CHANGE_COLOR

  constructor(public payload: string) {}
}
export class TodoFeaturesChangeIcon implements Action {
  readonly type = TODO_FEATURES_CHANGE_ICON

  constructor(public payload: string) {}
}
export class TodoFeaturesChangeBg implements Action {
  readonly type = TODO_FEATURES_CHANGE_BG

  constructor(public payload: string) {}
}

/** ============================================================================
 * Todo Detail Values
 *
 =============================================================================*/

/**
 *
 * @description data of todo in detail view
 * @export
 * @class TodoDetail
 * @implements {Action}
 */

export class TodoDetailReset implements Action {
  readonly type = TODO_DETAIL_RESET
  constructor() {}
}
export class TodoDetail implements Action {
  readonly type = TODO_DETAIL
  constructor(public payload: NgxTodoInterface) {}
}

export class TodoDetailProject implements Action {
  readonly type = TODO_DETAIL_PROJECT
  constructor(public payload: NgxTodoInterface) {}
}
export class TodoDetailCategory implements Action {
  readonly type = TODO_DETAIL_CATEGORY
  constructor(public payload: NgxTodoInterface) {}
}
export class TodoDetailDoTime implements Action {
  readonly type = TODO_DETAIL_DOTIME
  constructor(public payload: NgxTodoInterface) {}
}
export class TodoDetailDueDate implements Action {
  readonly type = TODO_DETAIL_DUEDATE
  constructor(public payload: Date) {}
}
export class TodoDetailRepeat implements Action {
  readonly type = TODO_DETAIL_REPEAT
  constructor(public payload: NgxTodoInterface) {}
}
export class TodoDetailPriority implements Action {
  readonly type = TODO_DETAIL_PRIORITY
  constructor(public payload: NgxTodoInterface) {}
}
export class TodoDetailState implements Action {
  readonly type = TODO_DETAIL_STATE
  constructor(public payload: NgxTodoInterface) {}
}
export class TodoDetailText implements Action {
  readonly type = TODO_DETAIL_TEXT
  constructor(public payload: NgxTodoInterface) {}
}
export class TodoDetailTitle implements Action {
  readonly type = TODO_DETAIL_TITLE
  constructor(public payload: string) {}
}

/** ============================================================================
 * values from const or enums
 *
 =============================================================================*/
export class TodoRelationsFromEnum implements Action {
  readonly type = TODO_RELATIONS
  constructor(public payload: any) {}
}
export class TodoKindOfFromEnum implements Action {
  readonly type = TODO_KINDOF
  constructor(public payload: any) {}
}
export class TodoRepeatTimeFromEnum implements Action {
  readonly type = TODO_REPEAT
  constructor(public payload: any) {}
}
export class TodoDoTimeFromEnum implements Action {
  readonly type = TODO_DOTIME
  constructor(public payload: any) {}
}
/** ============================================================================
 * interaction with user data e.g. features
 *
 =============================================================================*/
export class SetActiveProject implements Action {
  readonly type = SET_ACTIVE_TODO_PROJECT
  constructor(public payload: string) {}
}

export class SetActiveType implements Action {
  readonly type = SET_ACTIVE_TODO_TYPE
  constructor(public payload: string) {}
}
export class SetToUpdateUserFeature implements Action {
  readonly type = SET_TO_UPDATE_USER_FEATURES

  constructor(public payload: { action: string; type: string; id: string }) {}
}
export class ResetActiveTodo implements Action {
  readonly type = RESET_ACTIVE_TODO

  constructor() {}
}

export type NgxTodoActions =
  | TodosLoaded
  | TodoFilter
  | SetToUpdateUserFeature
  | TodoFeaturesChangeName
  | TodoFeaturesChangeColor
  | TodoFeaturesChangeIcon
  | TodoFeaturesChangeBg
  | TodoCategories
  | TodoProjects
  | TodoDetail
  | TodoDetailReset
  | TodoDetailCategory
  | TodoDetailProject
  | TodoDetailDoTime
  | TodoDetailDueDate
  | TodoDetailRepeat
  | TodoDetailPriority
  | TodoDetailState
  | TodoDetailText
  | TodoDetailTitle
  | TodoRelationsFromEnum
  | TodoKindOfFromEnum
  | TodoRepeatTimeFromEnum
  | TodoDoTimeFromEnum
  | SetActiveProject
  | SetActiveType
  | ResetActiveTodo
