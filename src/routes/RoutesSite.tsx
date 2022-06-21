import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import BillsList from '../pages/bills/BillsList'
import ProductsList from '../pages/product/ProductsList'
import AddProvider from '../pages/stockist/AddProvider'
import ReceiptsList from '../pages/receipts/ReceiptsList'
import StockistsList from '../pages/stockist/StockistsList'
import AddProduct from '../pages/product/AddProduct'
import EditProduct from '../components/products/EditProduct'


const RoutesSite = () => {
  return (
    <div>
      <nav>
        <Link to="/"  className="link">Create Stockist</Link>
        <Link to="/stockists" className="link">Stockists</Link>
        <Link to="/create/product" className="link">Create Product</Link>
        <Link to="/products" className="link">Products</Link>
        {/* <Link to="/productEdit" className="link">Edit Product</Link> */}
        <Link to="/bills" className="link">Bills</Link>
        <Link to="/receipts" className="link">Receipts</Link>
      </nav>
      <nav>
        <Routes>
          <Route path="/" element={< AddProvider />} />
          <Route path="/stockists" element = {< StockistsList />} />
          <Route path="/create/product" element = {< AddProduct />} />
          <Route path="/products" element = {< ProductsList />} />
          <Route path="/productEdit" element = {< EditProduct />} />
          <Route path="/bills" element = {< BillsList />} />
          <Route path="/receipts" element = {< ReceiptsList />} />
        </Routes>
      </nav>
    </div>
  )
}

export default RoutesSite