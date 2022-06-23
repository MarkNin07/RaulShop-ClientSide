import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ProductTable from '../../components/products/ProductTable'
import { RootState } from '../../state/store'



const ProductsList = () => {

  const {user} = useSelector((state:RootState) => state.login)

  const navigate = useNavigate()

  useEffect(() => {
    if(user === false){
      navigate('/')
    }
  }, [])

  return (
    <div>
        <h1>Products List</h1>
        <ProductTable />
    </div>

  )
}

export default ProductsList