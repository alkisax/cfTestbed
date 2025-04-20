/* eslint-disable no-unused-vars */
const Products = ({ products, loading, setLoading }) => {

  return (
    <>
      {loading && <p>...Loading</p>}
      {!loading && 
        <>
          <table>
            <thead>
              <tr>
                <th>product</th>
                <th>cost</th>
                <th>description</th>
                <th>quantity</th>
              </tr>

            </thead>
            <tbody>
              {products.map((product) => {
                console.log(product._id)
                return(
                  <tr key={product._id}>
                    <td>{product.product}</td>
                    <td>{product.cost}</td>
                    <td>{product.description}</td>
                    <td>{product.quantity}</td>
                  </tr> 
                )
              })}
            </tbody> 
          </table>
        </>      
      }
    </>
  )
}

export default Products