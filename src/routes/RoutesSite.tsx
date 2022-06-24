import React from 'react'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import BillsList from '../pages/bills/BillsList'
import ProductsList from '../pages/product/ProductsList'
import AddProvider from '../pages/stockist/AddProvider'
import ReceiptsList from '../pages/receipts/ReceiptsList'
import StockistsList from '../pages/stockist/StockistsList'
import AddProduct from '../pages/product/AddProduct'
import EditProduct from '../components/products/EditProduct'
import ProductOrder from '../pages/bills/ProductOrder'
import SubmitBill from '../pages/bills/SubmitBill'
import Login from '../components/login/Login'
import SignIn from '../components/login/SignIn'
import { useDispatch } from 'react-redux'
import { logoutInReducer } from '../state/slices/LoginSlice'


const RoutesSite = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logOut = () => {
    dispatch(logoutInReducer())
    navigate('/')
  }

  return (
    <div>
      <nav>
        <Link to="/stockist"  className="link">Create Stockist</Link>
        <Link to="/stockists" className="link">Stockists</Link>
        <Link to="/create/product" className="link">Create Product</Link>
        <Link to="/products" className="link">Products</Link>
        <Link to="/order/product" className="link">Order</Link>
        <Link to="/bills" className="link">Bills</Link>
        <Link to="/receipts" className="link">Receipts</Link>
        <Link to="/" className="link" onClick={logOut}>Log Out</Link>

      </nav>
      <nav>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route  path="/signUp" element={<SignIn/>} />
          <Route path="/stockist" element={< AddProvider />} />
          <Route path="/stockists" element = {< StockistsList />} />
          <Route path="/create/product" element = {< AddProduct />} />
          <Route path="/products" element = {< ProductsList />} />
          <Route path="/productEdit" element = {< EditProduct />} />
          <Route path="/order/product" element = {< SubmitBill />} />
          <Route path="/bills" element = {< BillsList />} />
          <Route path="/order" element = {<ProductOrder/>} />
          <Route path="/receipts" element = {< ReceiptsList />} />
        </Routes>
      </nav>
    </div>
  )
}

export default RoutesSite