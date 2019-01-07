import { combineReducers } from 'redux'

import tabReducer from '../common/tab/tabReducer'

const rootReducer = combineReducers({
  tab: tabReducer
})

export default rootReducer