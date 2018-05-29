import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

const actionCreator = require('../../app/main.js').default

export class ModuleOne extends React.Component {
  render () {
    return (
      <div>
        <div className='header' style={{textAlign: 'center', height: '100vh'}}>
          module one page
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {

  }
}

const mapDispatchToProps = dispatch => {
  const actions = bindActionCreators(actionCreator, dispatch)
  return {
    login: actions.login
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModuleOne)
