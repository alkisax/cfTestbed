import { useParams } from "react-router-dom"

const ProductEditForm = ({ 
  products,
  product,
  setProduct,
  cost,
  setCost,
  description,
  setDescription,
  quantity,
  setQuantity,
  handleSubmitEditBtn
}) => {
  const { productId } = useParams(); // This will give you the productId from the URL
  console.log('Editing product with ID:', productId)
  
  const editedProduct = products.find(product => product._id === productId)

  return (
    <>
      <h3>edit product {editedProduct.product}</h3>
      <p>Product: {editedProduct.product}, cost: {editedProduct.cost}, description: {editedProduct.description}, quantity: {editedProduct.quantity}</p>


      <form onSubmit={(event) => handleSubmitEditBtn (event, productId)}>
        <div>
          <label>Product</label>
          <input
            type="text"
            value={product}
            name="product"
            onChange={({ target }) => setProduct(target.value)}
            placeholder={editedProduct.product}  
            autoComplete="Product"
          />
        </div>
        <div>
          <label>Cost</label>
          <input
            type="text"
            value={cost}
            name="cost"
            onChange={({ target }) => setCost(target.value)}
            placeholder={editedProduct.cost}  
            autoComplete="cost"
          />
        </div>
        <div>
          <label>Description</label>
          <input
            type="text"
            value={description}
            name="description"
            onChange={({ target }) => setDescription(target.value)}
            placeholder={editedProduct.description} 
            autoComplete="description"
          />
        </div>
        <div>
          <label>Quantity</label>
          <input
            type="text"
            value={quantity}
            name="quantity"
            onChange={({ target }) => setQuantity(target.value)}
            placeholder={editedProduct.quantity}  
            autoComplete="quantity"
          />
        </div>
        <button type="submit">Submit Edit</button>
      </form>
    </>

    
  )

}
export default ProductEditForm