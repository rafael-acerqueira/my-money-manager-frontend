import { combineReducers } from 'redux'
import { reducer as formReducer } from  'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import tabReducer from '../common/tab/tabReducer'
import billingCycleReducer from '../billingCycle/billingCycleReducer'

const rootReducer = combineReducers({
  tab: tabReducer,
  billingCycle: billingCycleReducer,
  form: formReducer,
  toastr: toastrReducer

})

export default rootReducer