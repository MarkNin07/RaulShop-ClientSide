import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ProductForm from '../../components/products/ProductForm'
import { RootState } from '../../state/store'


const AddProduct = () => {

  const {user} = useSelector((state:RootState) => state.login)

  const navigate = useNavigate()

  useEffect(() => {
    if(user === false){
      navigate('/')
    }
  }, [])

  return (
    <div>
        <h1>Add Product</h1>
        <ProductForm />
    </div>
  )
}

export default AddProduct