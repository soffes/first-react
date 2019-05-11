import React from 'react'
import PropTypes from 'prop-types'

class ProductRow extends React.Component {
  render () {
    const product = this.props.product
    const name = product.stocked
      ? product.name
      : <span style={{ color: 'red' }}>
        {product.name}
      </span>

    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    )
  }
}

ProductRow.propTypes = {
  product: PropTypes.object
}

export default ProductRow
