import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

import LabelAndInput from '../common/form/labelAndInput'

class BillingCycleForm extends Component {
  render() {

    const { handleSubmit } = this.props

    return(
      <form role='form' onSubmit={handleSubmit}>
        <div className='box-body'>
          <Field name='name' component={LabelAndInput} />
          <Field name='month' component={LabelAndInput} />
          <Field name='year' component={LabelAndInput} />
        </div>
        <div className='box-footer'>
          <button type='submit' className='btn btn-primary'>Submit</button>
        </div>
      </form>
    )
  }
}

export default reduxForm({form: 'billingCycleForm'})(BillingCycleForm)