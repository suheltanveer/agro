import { SET_SEARCH_TERM } from './Header/actions'
import setSearchTerm from './Header/reducers'
import { ADD_OMDB_DATA } from './Details/actions'
import addOMDBData from './Details/reducers'

const DEFAULT_STATE = {
  searchTerm: '',
  omdbData: {}
}

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return setSearchTerm(state, action)
    case ADD_OMDB_DATA:
      return addOMDBData(state, action)
    default:
      return state
  }
}

export default rootReducer
