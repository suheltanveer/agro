import React from 'react'

const { shape, string, arrayOf } = React.PropTypes

const Categories = React.createClass({
  propTypes: {
    categories: arrayOf(shape({
      title: string,
      poster: string,
      id: string
    }))
  },
  render () {
    const { categories } = this.props
    return (
      <div className='Categories'>
        <h3>Shop by categories</h3>
        <ul>
          {categories.map(category => {
            return <li key={category.id}>{category.title}</li>
          })}
        </ul>
      </div>
    )
  }
})

export default Categories
