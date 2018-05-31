module.exports = function test (params, store) {
  return next => action => {
    // console.log('test', action.type)
    return next(action)
  }
}
