import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

const actionCreator = require('../../app/main.js').default

export class ModuleOne extends React.Component {
  static propTypes = {
    counter: PropTypes.number,
    increment: PropTypes.func,
    getUsers: PropTypes.func,
    request: PropTypes.bool,
    usersDetails: PropTypes.array
  }

  incrementNum = () => {
    const {increment} = this.props
    // console.log(counter + 2)
    increment(1)
  }

  fetchUsers = () => {
    const {getUsers} = this.props
    getUsers()
  }

  renderUsers = () => {
    const {usersDetails} = this.props
    return usersDetails.map((user, index) => (
      <div key={index}>
        <span>{user.name}</span>
        <span>{user.email}</span>
      </div>
    ))
  }

  render () {
    const {counter, usersDetails, request} = this.props
    return (
      <div>
        <div className='header' style={{textAlign: 'center', marginTop: '20px'}}>
          module one page. counter is {counter}
          <button onClick={this.incrementNum} style={{margin: '0 10px 0 10px'}}>Increment number</button>
          <button onClick={this.fetchUsers} style={{margin: '0 10px 0 10px'}}>Get Fake Users</button>
          <span>Request status {request ? 'true' : 'false'}</span>
        </div>
        <div style={{textAlign: 'center', marginTop: '20px'}}>
          {!usersDetails.length ? <div>There are no available users</div> : this.renderUsers()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  // console.log(state)
  return {
    counter: state.counter,
    request: state.request,
    usersDetails: state.usersDetails
  }
}

const mapDispatchToProps = dispatch => {
  const actions = bindActionCreators(actionCreator, dispatch)
  // console.log(actions)
  return {
    increment: actions.increment,
    getUsers: actions.getUsers
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModuleOne)
