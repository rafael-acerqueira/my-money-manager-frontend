import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'

import { init } from './billingCycleActions'
import LabelAndInput from '../common/form/labelAndInput'
import ItemList from './itemList'
import Summary from './summary'

class BillingCycleForm extends Component {

  calculateSummary() {
    const sum = (acc, value) => acc + value
    return {
      sumOfCredits: this.props.credits.map(c => +c.value || 0).reduce(sum, 0),
      sumOfDebts: this.props.debts.map(d => +d.value || 0).reduce(sum, 0)
    }
  }

  render() {

    const { handleSubmit, readOnly, credits, debts } = this.props
    const { sumOfCredits, sumOfDebts } = this.calculateSummary()
    console.log(credits.length > 0)
    return(
      <form role='form' onSubmit={handleSubmit}>
        <div className='box-body'>
          <Field name='name' component={LabelAndInput} 
                 label='Nome' cols='12 4' placeholder='Informe o nome' 
                 readOnly={readOnly} />
          <Field name='month' component={LabelAndInput} type='number'
                  label='Mês' cols='12 4' placeholder='Informe o mês' 
                  readOnly={readOnly} />
          <Field name='year' component={LabelAndInput} type='number'
                  label='Ano' cols='12 4' placeholder='Informe o ano' 
                  readOnly={readOnly} />
          <Summary credit={sumOfCredits} debt={sumOfDebts} />         
          <ItemList cols='12 6' readOnly={readOnly} list={credits}
                    field='credits' legend='Créditos'/>  
          <ItemList cols='12 6' readOnly={readOnly} list={debts}
                    field='debts' legend='Débitos' showStatus/>                           
        </div>
        <div className='box-footer'>
          <button type='submit' className={`btn btn-${this.props.submitClass}`}>{this.props.submitLabel}</button>
          <button type='button' className='btn btn-default' 
                  onClick={this.props.init}>Cancelar</button>
        </div>
      </form>
    )
  }
}

const selector = formValueSelector('billingCycleForm')
const mapStateToProps = state => ({
  credits: selector(state, 'credits'),
  debts: selector(state, 'debts')
})
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)