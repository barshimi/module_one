export default function (state, payload, reducerConfig) {
  const {reducer} = reducerConfig
  if (reducer === 'counter') return payload + 3
  return state
}
