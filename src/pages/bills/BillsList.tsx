import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import BillTable from '../../components/bills/BillTable'
import { RootState } from '../../state/store'

const BillsList = () => {

  const {user} = useSelector((state:RootState) => state.login)

  const navigate = useNavigate()

  useEffect(() => {
    if(user === false){
      navigate('/')
    }
  }, [])

  return (
    <div>
        <h1>Bills List</h1>
        <BillTable />
    </div>
  )
}

export default BillsList