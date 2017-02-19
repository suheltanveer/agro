import React from 'react'
import { Match } from 'react-router'
import { Provider } from 'react-redux'
import store from './store'
import AsyncRoute from './AsyncRoute'
import preload from '../public/data.json'
if (global) {
  global.System = { import () {} }
}

const { object } = React.PropTypes

const App = () => {
  return (
    <Provider store={store}>
      <div className='app'>
        <Match
          exactly
          pattern='/'
          component={(props) => <AsyncRoute props={props} loadingPromise={System.import('./Homepage/component')} />}
        />
        <Match
          pattern='/search'
          component={(props) => <AsyncRoute
            props={Object.assign({shows: preload.shows}, props)}
            loadingPromise={System.import('./Search/component')}
          />}
        />
        <Match
          pattern='/details/:id'
          component={(props) => {
            const shows = preload.shows.filter((show) => props.params.id === show.imdbID)
            return <AsyncRoute
              props={Object.assign({show: shows[0]}, props)}
              loadingPromise={System.import('./Details/component')}
            />
          }}
        />
      </div>
    </Provider>
  )
}

App.propTypes = {
  params: object
}

export default App
