import React, { Component } from 'react'
import Grid from '../common/layout/grid'

class CreditList extends Component {

  renderRows() {
    return(
      <tr>
      </tr>
    )
  }


  render() {
    return(
      <Grid cols={this.props.cols}>
        <fieldset>
          <legend>Créditos</legend>
          <table className='table'>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Valor</th>
                <th>Ações</th>
              </tr>            
            </thead>
            <tbody>
              {this.renderRows()}
            </tbody>
          </table>
        </fieldset>
      </Grid>
    )
  }
}

export default CreditList