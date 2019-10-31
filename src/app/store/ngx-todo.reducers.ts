import {
  NgxTodo,
  NgxTodoDoTime,
  NgxTodoKindOf,
  NgxTodoRelation,
  NgxTodoRepeat,
} from 'projects/ngx-components/src/public_api'
import * as Actions from './ngx-todo.actions'
import * as fromNgxRoot from './ngx.reducers'

export interface NgxTodoStateInterface {
  todos: Array<NgxTodo>
  categories: Array<any>
  projects: Array<any>
  color: string
  bg: string
  icon: string
  filter: { name: string; index?: number; type?: string }
  todo_active_project: string
  // todo_active_category: string
  todo_active_type: string
  detail: NgxTodo
  relations: Array<any>
  kindof: Array<any>
  repeat: Array<any>
  dotime: Array<any>
  currentField: string
}

/** lazy*/
export interface State extends fromNgxRoot.State {
  todo: NgxTodoStateInterface
}

const initialState: NgxTodoStateInterface = {
  todos: [],
  categories: [],
  projects: [],
  color: null,
  bg: null,
  icon: null,
  filter: { name: '', index: null, type: null },
  todo_active_project: null,
  // todo_active_category: null,
  todo_active_type: null,
  detail: new NgxTodo(),
  relations: Object.values(NgxTodoRelation),
  kindof: Object.values(NgxTodoKindOf),
  repeat: Object.values(NgxTodoRepeat),
  dotime: Object.values(NgxTodoDoTime),
  currentField: 'getPopoverManagerContent',
}

export function ngxTodoReducer(
  state = initialState,
  action: Actions.NgxTodoActions
) {
  switch (action.type) {
    case Actions.TODOS_LOADED:
      return {
        ...state,
        todos: [...action.payload],
      }
    case Actions.TODO_CATEGORIES:
      return {
        ...state,
        categories: [...state.categories, ...action.payload],
      }
    case Actions.TODO_PROJECTS:
      return {
        ...state,
        projects: [...state.projects, ...action.payload],
      }
    /** Maybe deprecated try to refactor functionallity with set_active_ - category project and type */
    case Actions.TODO_FILTER:
      return {
        ...state,
        filter: {
          name: action.payload.name,
          index: action.payload.index,
          type: action.payload.type || state.filter.type,
        },
      }
    case Actions.TODO_DETAIL:
      return {
        ...state,
        detail: action.payload,
      }
    case Actions.TODO_DETAIL_RESET:
      return {
        ...state,
        detail: new NgxTodo(),
      }
    case Actions.TODO_DETAIL_TITLE:
      state.detail.title = action.payload
      return {
        ...state,
      }
    case Actions.TODO_DETAIL_CATEGORY:
      state.detail.props.relationTo = {
        category: action.payload,
        project: state.detail.props.relationTo.project || null,
      }
      return {
        ...state,
      }
    case Actions.TODO_DETAIL_PROJECT:
      state.detail.props.relationTo = {
        project: action.payload,
        category: state.detail.props.relationTo.category || null,
      }
      return {
        ...state,
      }

    case Actions.TODO_FEATURES_CHANGE_NAME:
      state[state.filter.type][state.filter.index].name = action.payload

      return {
        ...state,
        categories: [...state.categories],
        projects: [...state.projects],
      }
    case Actions.TODO_FEATURES_CHANGE_ICON:
      state[state.filter.type][state.filter.index].icon = action.payload
      return {
        ...state,
        categories: [...state.categories],
        projects: [...state.projects],
      }
    case Actions.TODO_FEATURES_CHANGE_COLOR:
      state[state.filter.type][state.filter.index].color = action.payload

      return {
        ...state,
        categories: [...state.categories],
        projects: [...state.projects],
      }
    case Actions.TODO_FEATURES_CHANGE_BG:
      state[state.filter.type][state.filter.index].bg = action.payload
      return {
        ...state,
        categories: [...state.categories],
        projects: [...state.projects],
      }
    case Actions.TODO_DETAIL_DOTIME:
      state.detail.props.doTime = action.payload
      return {
        ...state,
      }
    case Actions.TODO_DETAIL_DUEDATE:
      state.detail.props.dueDate = action.payload
      return {
        ...state,
      }
    case Actions.TODO_DETAIL_REPEAT:
      state.detail.props.repeat = action.payload
      return {
        ...state,
      }
    case Actions.TODO_DETAIL_PRIORITY:
      state.detail.props.priority = action.payload
      return {
        ...state,
      }
    case Actions.TODO_DETAIL_STATE:
      state.detail.props.state = action.payload
      return {
        ...state,
      }
    case Actions.TODO_DETAIL_TEXT:
      state.detail.detail = action.payload
      return {
        ...state,
      }
    case Actions.SET_ACTIVE_TODO_PROJECT:
      return {
        ...state,
        todo_active_project: action.payload,
      }

    case Actions.SET_ACTIVE_TODO_TYPE:
      return {
        ...state,
        todo_active_type: action.payload,
      }
    case Actions.RESET_ACTIVE_TODO:
      state.detail = new NgxTodo()
      return {
        ...state,
      }
    case Actions.SET_TO_UPDATE_USER_FEATURES:
      if (state.todo_active_project && action.payload.type === 'projects') {
        state[action.payload.type].splice(
          state[action.payload.type].findIndex(
            e => e.name === state.todo_active_project
          ),
          1
        )
        state.todo_active_project = null
      } else if (action.payload.type === 'categories' && action.payload.id) {
        state[action.payload.type].splice(
          state[action.payload.type].findIndex(
            e => e.name === action.payload.id
          ),
          1
        )
      }
      return {
        ...state,
      }

    default:
      return state
  }
}

export const getTodos = (state: NgxTodoStateInterface) => state.todos
export const getTodosTypeCategory = (state: NgxTodoStateInterface) =>
  state.todos.filter(el => el.props.relationTo.category !== null)
export const getTodosTypeProject = (state: NgxTodoStateInterface) =>
  state.todos.filter(el => el.props.relationTo.project !== null)

export const getTodoCategories = (state: NgxTodoStateInterface) =>
  state.categories
export const getTodoProjects = (state: NgxTodoStateInterface) => state.projects

export const getTodoFilter = (state: NgxTodoStateInterface) => state.filter
export const getTodoDetail = (state: NgxTodoStateInterface) => state.detail
export const getTodoColor = (state: NgxTodoStateInterface) => state.color

export const getTodoRelations = (state: NgxTodoStateInterface) =>
  state.relations
export const getTodoKindOf = (state: NgxTodoStateInterface) => state.kindof
export const getTodoRepeat = (state: NgxTodoStateInterface) => state.repeat
export const getTodoDoTime = (state: NgxTodoStateInterface) => state.dotime

export const getActiveProject = (state: NgxTodoStateInterface) =>
  state.todo_active_project
// export const getActiveCategory = (state: NgxTodoStateInterface) =>
//   state.todo_active_category
export const getActiveType = (state: NgxTodoStateInterface) =>
  state.todo_active_type

export const getTodoEnumProps = (state: NgxTodoStateInterface) => {
  return {
    relations: state.relations,
    kindof: state.kindof,
    repeat: state.repeat,
    dotime: state.dotime,
  }
}
export const getTodoFeaturesUser = (state: NgxTodoStateInterface) => {
  return {
    feature: {
      todo: {
        categories: state.categories,
        projects: state.projects,
      },
    },
  }
}
