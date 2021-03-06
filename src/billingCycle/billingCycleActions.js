import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'
import URLS from '../consts'

const INITIAL_VALUES = {credits: [{}], debts: [{}]}

export function getList() {
  const request = axios.get(`${URLS.API_URL}/billingCycles`)

  return {
    type: 'BILLING_CYCLES_FETCHED',
    payload: request
  }
}

export function create(values) {
  return submit(values, 'post')
}

export function update(values) {
  return submit(values, 'put')
}

export function remove(values) {
  return submit(values, 'delete')
}


export function showUpdate(billingCycle) {
  return showTab(billingCycle, 'Update')
}

export function showDelete(billingCycle) {
  return showTab(billingCycle, 'Delete')
}

function showTab(billingCycle, method) {
  return [
    showTabs(`tab${method}`),
    selectTab(`tab${method}`),
    initialize('billingCycleForm', billingCycle)
  ]
}

export function init() {
  return [
    showTabs('tabList', 'tabCreate'),
    selectTab('tabList'),
    getList(),
    initialize('billingCycleForm', INITIAL_VALUES)

  ]
}

function submit(values, method) {
  return dispatch => {
    const id = values._id ? values._id : ''
    axios[method](`${URLS.API_URL}/billingCycles/${id}`, values)
        .then(resp => {
          toastr.success('Sucesso', 'Operação realizada com sucesso!')
          dispatch(init())
        })
        .catch(e => {
            e.response.data.errors.forEach(error => toastr.error('Erro', error))
        })
  }
}