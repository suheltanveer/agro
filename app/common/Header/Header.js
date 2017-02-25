import React from 'react'
import { connect } from 'react-redux'
import { setSearchTerm } from '../../actionCreators'
import { Link } from 'react-router'
import './Header.scss'

class Header extends React.Component {
  constructor (props) {
    super(props)

    this.handleSearchTermChange = this.handleSearchTermChange.bind(this)
  }
  handleSearchTermChange (event) {
    this.props.dispatch(setSearchTerm(event.target.value))
  }
  render () {
    let utilSpace
    if (this.props.showSearch) {
      utilSpace = <input
        className='search'
        onChange={this.handleSearchTermChange}
        value={this.props.searchTerm}
        type='text' placeholder='Search' />
    }

    return (
      <header className='header'>
        <div className='container'>
          <div className='row'>
            <div>
              <a className='mainMenu' href='javascript:void(0)'>menu</a>
              <h1 className='title'>
                <Link to='/'>
                  Agriplex
                </Link>
              </h1>
            </div>
            <nav>
              <ul>
                <li>
                  <Link to='/login'>
                    Login
                  </Link>
                </li>
                <li>
                  <Link to='/cart'>
                    Cart
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          {utilSpace}
        </div>
      </header>
    )
  }
}

const { func, bool, string } = React.PropTypes
Header.propTypes = {
  dispatch: func,
  showSearch: bool,
  searchTerm: string
}

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

export default connect(mapStateToProps)(Header)
