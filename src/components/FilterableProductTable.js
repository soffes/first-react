import React from 'react'
import PropTypes from 'prop-types'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

class FilterableProductTable extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      filterText: '',
      inStockOnly: false
    }

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
    this.handleInStockChange = this.handleInStockChange.bind(this)
  }

  handleFilterTextChange (filterText) {
    this.setState({
      filterText: filterText
    })
  }

  handleInStockChange (inStockOnly) {
    this.setState({
      inStockOnly: inStockOnly
    })
  }

  render () {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    )
  }
}

FilterableProductTable.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  filterText: PropTypes.string,
  inStockOnly: PropTypes.bool
}

export default FilterableProductTable
