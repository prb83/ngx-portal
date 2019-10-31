### actions file blueprint

```typescript
import { Action } from '@ngrx/store';

export const POPOVER_MANAGER_VISIBLE = '[PopoverManager] Visible State'

export class PopoverManagerSwitch implements Action {
  readonly type = POPOVER_MANAGER_VISIBLE

  constructor(public payload: boolean) {}
}
export type NgxPopoverManagerActions =
    | PopoverManagerSetOpen

```


### reducer file blueprint

```typescript
import * as Actions from './ngx-app.actions';

export interface NgxPopoverManagerStateInterface {
    popover_manager_open: boolean
    popover_manager_content: Array<any>
    popover_manager_window_headline: string
    popover_manager_selected_value: string
}

const initialState: NgxPopoverManagerStateInterface = {
    popover_manager_open: false,
    popover_manager_content: [],
    popover_manager_window_headline: '',
    popover_manager_selected_value: '',
}

export function ngxAppReducer(
    state = initialState,
    action: Actions.NgxPopoverManagerActions
) {
    switch (action.type) {
        case Actions.POPOVERMANAGER_OPEN:
            return {
                ...state,
                popover_manager_open: action.payload,
            }

        default:
            return state
    }
}

export const getPopoverManagerVisible = (state: NgxPopoverManagerStateInterface) =>
    state.popover_manager_open


```