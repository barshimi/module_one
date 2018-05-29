import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

const actionCreator = require('../../app/main.js').default

export class ModuleOne extends React.Component {
  static propTypes = {
    counter: PropTypes.number,
    increment: PropTypes.func
  }

  incrementNum = () => {
    const {counter, increment} = this.props
    console.log(counter + 2)
    increment(counter + 2)
  }

  render () {
    const {counter} = this.props
    return (
      <div>
        <div className='header' style={{textAlign: 'center', height: '100vh'}}>
          module one page. counter is {counter}
          <button onClick={this.incrementNum}>Increment number</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  // console.log(state)
  return {
    counter: state.initialReducers.counter
  }
}

const mapDispatchToProps = dispatch => {
  const actions = bindActionCreators(actionCreator, dispatch)
  // console.log(actions)
  return {
    increment: actions.increment
    // login: actions.login
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModuleOne)
