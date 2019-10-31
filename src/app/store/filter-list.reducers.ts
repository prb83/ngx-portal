import * as ItemListActions from './filter-list.actions'
import { Item } from './item.model'
const initialState = {
  items: [new Item('NgRx', 3200), new Item('NgXs', 1400)],
}

export function exampleReducer(
  state = initialState,
  action: ItemListActions.ItemListActions
) {
  switch (action.type) {
    case ItemListActions.ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
      }
    default:
      return state
  }
}
