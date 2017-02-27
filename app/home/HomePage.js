import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { setSearchTerm } from '../actionCreators'
import './HomePage.scss'
import Header from '../common/Header/Header'
import BannerSlider from '../common/BannerSlider/BannerSlider'
import Categories from '../common/Categories/Categories'

const { string, func, object, array } = React.PropTypes

const HomePage = React.createClass({
  contextTypes: {
    router: object
  },
  propTypes: {
    searchTerm: string,
    dispatchSetSearchTerm: func,
    categories: array
  },
  handleSearchTermChange (event) {
    this.props.dispatchSetSearchTerm(event.target.value)
  },
  handleSearchSubmit (event) {
    event.preventDefault()
    this.context.router.transitionTo('/search')
  },
  render () {
    return (
      <div className='HomePage'>
        <Header showSearch />
        <div className='homeContent'>
          <div className='container'>
            <div className='mainSlider'>
              <BannerSlider />
            </div>
            <Categories categories={this.props.categories} />
            <form onSubmit={this.handleSearchSubmit}>
              <input onChange={this.handleSearchTermChange} value={this.props.searchTerm} type='text' placeholder='Search' />
            </form>
            <Link to='/search'>or Browse All</Link>
          </div>
        </div>
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchSetSearchTerm (searchTerm) {
      dispatch(setSearchTerm(searchTerm))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
