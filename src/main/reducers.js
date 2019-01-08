import { combineReducers } from 'redux'

import tabReducer from '../common/tab/tabReducer'
import billingCycleReducer from '../billingCycle/billingCycleReducer'

const rootReducer = combineReducers({
  tab: tabReducer,
  billingCycle: billingCycleReducer

})

export default rootReducer