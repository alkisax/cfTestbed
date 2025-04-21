/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import './App.css'
import {
  BrowserRouter as Router,
  Routes, Route, Link, useNavigate
} from 'react-router-dom'
import ProductForm from './components/ProductForm'
import Products from './components/Products'
import ProductEditForm from './components/ProductEditForm'

const url = 'http://localhost:3001/api/products/'
// const url = '/api/products/'

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Link to="/products"><button>Products</button></Link>
      <Link to="/productForm"><button>Add Product</button></Link>
    </>
  )
}

const App = () => {
  const [products, setProducts] = useState([])
  const [product, setProduct] = useState('')
  const [cost, setCost] = useState('')
  const [description, setDescription] = useState('')
  const [quantity, setQuantity] = useState('')
  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(url)
      // console.log(response.data)
      setProducts(response.data)
      setLoading(false)
    }
    fetchData()
  }, [])

  const handleSubmitForm  = async (event) => {
    event.preventDefault()
    const newProduct = {
      product: product,
      cost: cost,
      description: description,
      quantity: quantity
    }
    try {
      const response = await axios.post(url, newProduct)
      // console.log(response.data)

      // Fetch updated products list after the new product is added
      const updatedResponse = await axios.get(url);
      setProducts(updatedResponse.data);

      setLoading(false)
      setProduct('')
      setCost('')
      setDescription('')
      setQuantity('')
      navigate('/')
    } catch (err){
      console.log(err);      
    }
  }

  const editHandler = async (event) => {
    const productId = event.target.id
    console.log(productId)
    navigate(`/ProductEditForm/${productId}`)
  }

  const handleSubmitEditBtn = async (event, id) => {
    event.preventDefault()

    const editedProduct = products.find(product => product._id === id)
    
    const updatedProduct = {
      product: product || editedProduct.product,
      cost: cost || editedProduct.cost,
      description: description || editedProduct.description,
      quantity: quantity || editedProduct.quantity,
    };
  
    try {
      const response = await axios.patch(
        `${url}${id}`, 
        updatedProduct
      );
  
      console.log('Product updated:', response.data);
      const updatedResponse = await axios.get(url);
      setProducts(updatedResponse.data)
      setLoading(false)
      setProduct('')
      setCost('')
      setDescription('')
      setQuantity('')
      navigate('/products')
    } catch (error) {
      console.error('Error updating product:', error);
    } 
  }

  const deleteHandler = async (event) => {
    const productId = event.target.id
    const toBeDeletedProduct = products.find(product => product._id === productId)
    window.confirm(`Are you sure you want to delete ${toBeDeletedProduct.product}?`)
    try {
      const response = await axios.delete(
        `${url}${productId}`, 
        toBeDeletedProduct
      );
  
      console.log('Product deleted:', response.data);
      const updatedResponse = await axios.get(url);
      setProducts(updatedResponse.data)
      setLoading(false)
      navigate('/products')
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  }

  return (
    <>
      <Link to={"/"}><button>Home</button></Link>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/products' element={<Products 
            products={products}
            loading={loading}
            setLoading={setLoading}
            editHandler={editHandler}
            deleteHandler={deleteHandler}
        />} />

        <Route path='/productForm' element={<ProductForm 
          product={product}
          setProduct={setProduct}
          cost={cost}
          setCost={setCost}
          description={description}
          setDescription={setDescription}
          quantity={quantity}
          setQuantity={setQuantity}
          handleSubmitForm={handleSubmitForm}
        />} />

        <Route path='/ProductEditForm/:productId' element={<ProductEditForm 
          products={products}
          product={product}
          setProduct={setProduct}
          cost={cost}
          setCost={setCost}
          description={description}
          setDescription={setDescription}
          quantity={quantity}
          setQuantity={setQuantity}
          handleSubmitEditBtn={handleSubmitEditBtn}
        />}/>   
      </Routes>
    </>
  )
}

export default App
