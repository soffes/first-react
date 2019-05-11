import React from 'react'
import PropTypes from 'prop-types'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

class FilterableProductTable extends React.Component {
  render () {
    return (
      <div>
        <SearchBar />
        <ProductTable products={this.props.products} />
      </div>
    )
  }
}

FilterableProductTable.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object)
}

export default FilterableProductTable
