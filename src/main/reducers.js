import { combineReducers } from 'redux'
import { reducer as formReducer } from  'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import tabReducer from '../common/tab/tabReducer'
import billingCycleReducer from '../billingCycle/billingCycleReducer'
import AuthReducer from '../auth/authReducer'

const rootReducer = combineReducers({
  tab: tabReducer,
  billingCycle: billingCycleReducer,
  form: formReducer,
  toastr: toastrReducer,
  auth: AuthReducer

})

export default rootReducer