import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import BillsList from '../pages/bills/BillsList'
import ProductsList from '../pages/product/ProductsList'
import AddProvider from '../pages/receipts/AddProvider'
import ReceiptsList from '../pages/receipts/ReceiptsList'
import StockistsList from '../pages/stockist/StockistsList'


const RoutesSite = () => {
  return (
    <div>
      <nav>
        <Link to="/">Create Stockist</Link>
        <Link to="/stockists">Stockists</Link>
        <Link to="/products">Products</Link>
        <Link to="/bills">Bills</Link>
        <Link to="/receipts">Receipts</Link>
      </nav>
      <nav>
        <Routes>
          <Route path="/" element={< AddProvider />} />
          <Route path="/stockists" element = {< StockistsList />} />
          <Route path="/products" element = {< ProductsList />} />
          <Route path="/bills" element = {< BillsList />} />
          <Route path="/receipts" element = {< ReceiptsList />} />
        </Routes>
      </nav>
    </div>
  )
}

export default RoutesSite