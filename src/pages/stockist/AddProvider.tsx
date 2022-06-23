import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import StockistForm from '../../components/stockists/StockistForm'
import { RootState } from '../../state/store'


const AddProvider = () => {

  const {user} = useSelector((state:RootState) => state.login)

  const navigate = useNavigate()

  useEffect(() => {
    if(user === false){
      navigate('/')
    }
  }, [])

  return (
    <div className="stockist-form">
        <h1>Add a new Provider</h1>
        < StockistForm />
    </div>
    
  )
}

export default AddProvider