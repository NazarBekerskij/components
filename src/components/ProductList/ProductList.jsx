import { Component } from 'react'

class ProductList extends Component {
  render() {
    const { products, handleDelete } = this.props

    return (
      <section className="product-list">
        <h2 className="product-list-title">Shopping List</h2>

        {products.length === 0 ? (
          <p className="empty-message">
            Your shopping list is empty.
          </p>
        ) : (
          <ul className="products-grid">
            {products.map(({ id, name, quanity, price }) => (
              <li className="product-card" key={id}>
                <h3 className="product-name">{name}</h3>

                <p className="product-info">
                  Quantity: {quanity}
                </p>

                <p className="product-info">
                  Price per item: {price.toFixed(2)} грн
                </p>

                <p className="product-total">
                  Total: {(quanity * price).toFixed(2)} грн
                </p>

                <button className='product-delete' type="submit" onClick={() => handleDelete(id)}>Delete</button>
              </li>
            ))}
          </ul>
        )}
      </section>
    )
  }
}

export default ProductList