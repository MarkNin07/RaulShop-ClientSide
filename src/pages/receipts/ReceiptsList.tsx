import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ReceiptsTable from '../../components/receipts/ReceiptsTable'
import { RootState } from '../../state/store'


const ReceiptsList = () => {

  const {user} = useSelector((state:RootState) => state.login)

  const navigate = useNavigate()

  useEffect(() => {
    if(user === false){
      navigate('/')
    }
  }, [])

  return (
    <div>
        <h1>Receipts List</h1>
        <ReceiptsTable />
    </div>
  )
}

export default ReceiptsList