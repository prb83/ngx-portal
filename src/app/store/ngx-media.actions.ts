import { Action } from '@ngrx/store'

export const MEDIA_SET_LIST = '[MediaManager] Set assets'
export const MEDIA_SET_MEDIA_NEW_TRUE = '[MediaManager] Set new media to true'
export const MEDIA_SET_MEDIA_NEW_FALSE =
  '[MediaManager] Set new media exists set to false'
export const MEDIA_SET_MEDIA_INDEX_DOUBLED =
  '[MediaManager] Set index if media is doubled'
export const MEDIA_RESET_MEDIA_INDEX_DOUBLED =
  '[MediaManager] Reset index if media is doubled'

export class MediaSetList implements Action {
  readonly type = MEDIA_SET_LIST

  constructor(public payload: Array<String>) {}
}
export class MediaSetNewMediaTrue implements Action {
  readonly type = MEDIA_SET_MEDIA_NEW_TRUE

  constructor() {}
}
export class MediaSetNewMediaFalse implements Action {
  readonly type = MEDIA_SET_MEDIA_NEW_FALSE

  constructor() {}
}
export class MediaSetNewMediaIsDoubledIndex implements Action {
  readonly type = MEDIA_SET_MEDIA_INDEX_DOUBLED

  constructor(public payload: Number) {}
}
export class MediaResetNewMediaIsDoubledIndex implements Action {
  readonly type = MEDIA_RESET_MEDIA_INDEX_DOUBLED

  constructor() {}
}

export type NgxMediaActions =
  | MediaSetList
  | MediaSetNewMediaTrue
  | MediaSetNewMediaFalse
  | MediaSetNewMediaIsDoubledIndex
  | MediaResetNewMediaIsDoubledIndex
