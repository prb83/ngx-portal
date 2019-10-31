import { Action } from '@ngrx/store'
import { Item } from './item.model'
export const ADD_ITEM = 'ADD_ITEM'

export class AddItem implements Action {
  readonly type = ADD_ITEM

  constructor(public payload: Item) {}
}
export type ItemListActions = AddItem
// export class SetSecondaryAppNavigation implements Action {
//     readonly type = SET_SECONDARYNAV

//     constructor(public payload: any) {}
// }

// export type ItemListActions = AddItem | SetSecondaryAppNavigation
