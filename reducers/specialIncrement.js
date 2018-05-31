export default function (state, payload, reducerConfig) {
  // reducerConfig: contain the effected reducer and payload config
  const {reducer} = reducerConfig
  console.log(state, payload, reducerConfig)
  if (reducer === 'counter') return state + payload
  return state
}
