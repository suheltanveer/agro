import { ADD_OMDB_DATA } from './actions'
import axios from 'axios'

export function addOMDBData (imdbID, omdbData) {
  return { type: ADD_OMDB_DATA, imdbID, omdbData }
}

export function getOMDBDetails (imdbID) {
  return function (dispatch, getState) {
    axios.get(`http://www.omdbapi.com/?i=${imdbID}`)
      .then((response) => {
        dispatch(addOMDBData(imdbID, response.data))
      })
      .catch((error) => console.error('axios error', error))
  }
}
