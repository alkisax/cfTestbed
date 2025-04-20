const ProductForm = ({ 
  product,
  setProduct,
  cost,
  setCost,
  description,
  setDescription,
  quantity,
  setQuantity,
  handleSubmitForm 
}) => {
  return (
    <>
      <form onSubmit={handleSubmitForm}>
        <div>
        product
          <input type="text"
          value={product}
          name="product"
          onChange={({target}) => setProduct(target.value)}
          autoComplete="Product"
          />
        </div>
        <div>
        cost
          <input type="text"
          value={cost}
          name="cost"
          onChange={({target}) => setCost(target.value)}
          autoComplete="cost"
          />
        </div>
        <div>
        description
          <input type="text"
          value={description}
          name="description"
          onChange={({target}) => setDescription(target.value)}
          autoComplete="description"
          />
        </div>
        <div>
        quantity
          <input type="text"
          value={quantity}
          name="quantity"
          onChange={({target}) => setQuantity(target.value)}
          autoComplete="quantity"
          />
        </div>
        <button type="submit">submit</button>        
      </form>
    </>
  )
}

export default ProductForm