export default function test (params, store) {
  return next => action => {
    console.log(action.type)
    return next(action)
  }
}
