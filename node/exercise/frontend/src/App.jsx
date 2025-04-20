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

const url = 'http://localhost:3001/api/products/'

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
      console.log(response.data)
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
    const response = await axios.post(url, newProduct)
    setProducts(products.concat(response.data))
    setLoading(false)
    setProduct('')
    setCost('')
    setDescription('')
    setQuantity('')
    navigate('/products') 
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
      </Routes>
    </>
  )
}

export default App
