import React from 'react'
import { Match } from 'react-router'
import { Provider } from 'react-redux'
import store from './store'
import AsyncRoute from './AsyncRoute'
import preload from '../public/data.json'
import categoriesData from '../public/categories.json'
if (global) {
  global.System = { import () {} }
}

const App = () => {
  return (
    <Provider store={store}>
      <div className='app'>
        <Match
          exactly
          pattern='/'
          component={(props) => <AsyncRoute
            props={Object.assign({categories: categoriesData.categories}, props)}
            loadingPromise={System.import('./home/HomePage')}
          />}
        />
        <Match
          pattern='/search'
          component={(props) => <AsyncRoute
            props={Object.assign({shows: preload.shows}, props)}
            loadingPromise={System.import('./listing/Search')}
          />}
        />
        <Match
          pattern='/details/:id'
          component={(props) => {
            const shows = preload.shows.filter((show) => props.params.id === show.imdbID)
            return <AsyncRoute
              props={Object.assign({show: shows[0]}, props)}
              loadingPromise={System.import('./Details')}
            />
          }}
        />
      </div>
    </Provider>
  )
}

const { shape, string } = React.PropTypes
App.propTypes = {
  params: shape({
    id: string
  })
}

export default App
