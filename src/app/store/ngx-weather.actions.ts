import { Action } from '@ngrx/store'

export const OWCONDITIONS_LOADED = 'OWCONDITIONS_LOADED'
export const OWFORECAST_LOADED = 'OWFORECAST_LOADED'
export const WU_CONDITIONS = 'WU_CONDITIONS'
export const WUFORECAST_DAILY = 'WUFORECAST_DAILY'
export const WUFORECAST_HOURLY = 'WUFORECAST_HOURLY'

export class OwConditionsLoaded implements Action {
  readonly type = OWCONDITIONS_LOADED

  constructor(public payload: any) {}
}
export class OwForecastLoaded implements Action {
  readonly type = OWFORECAST_LOADED

  constructor(public payload: any) {}
}
export class WuConditions implements Action {
  readonly type = WU_CONDITIONS

  constructor(public payload: any) {}
}
export class WuForecastDaily implements Action {
  readonly type = WUFORECAST_DAILY

  constructor(public payload: any) {}
}
export class WuForecastHourly implements Action {
  readonly type = WUFORECAST_HOURLY

  constructor(public payload: any) {}
}

export type NgxWeatherActions =
  | OwConditionsLoaded
  | OwForecastLoaded
  | WuConditions
  | WuForecastDaily
  | WuForecastHourly
