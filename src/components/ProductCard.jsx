function ProductCard({ product, onRemove }) {
  return (
    <div className={!product.inStock ? 'outOfStockClass' : ''}>
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      {!product.inStock && <p>Out of Stock</p>}
      <button onClick={() => onRemove(product.id)}>Remove</button>
    </div>
  )
}

export default ProductCard