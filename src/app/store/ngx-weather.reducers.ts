import * as Actions from './ngx-weather.actions'

export interface NgxWeatherStateInterface {
  owConditions: any
  owForecast: any
  wuConditions: any
  wuForecastDaily: any
  wuForecastHourly: any
}

const initialState: NgxWeatherStateInterface = {
  owConditions: [],
  owForecast: [],
  wuConditions: [],
  wuForecastDaily: [],
  wuForecastHourly: [],
}

export function ngxWeatherReducer(
  state = initialState,
  action: Actions.NgxWeatherActions
) {
  switch (action.type) {
    case Actions.OWCONDITIONS_LOADED:
      return {
        ...state,
        owConditions: action.payload,
      }
    case Actions.OWFORECAST_LOADED:
      return {
        ...state,
        owForecast: action.payload,
      }
    case Actions.WU_CONDITIONS:
      return {
        ...state,
        wuConditions: action.payload,
      }
    case Actions.WUFORECAST_DAILY:
      return {
        ...state,
        wuForecastDaily: action.payload,
      }
    case Actions.WUFORECAST_HOURLY:
      return {
        ...state,
        wuForecastHourly: action.payload,
      }

    default:
      return state
  }
}
