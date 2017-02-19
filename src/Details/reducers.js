const addOMDBData = (state, action) => {
  const newOMDBData = {}
  Object.assign(newOMDBData, state.omdbData, {[action.imdbID]: action.omdbData})
  const newState = {}
  Object.assign(newState, state, {omdbData: newOMDBData})
  return newState
}

export default addOMDBData
