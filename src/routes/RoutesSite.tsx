import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import ProductTable from '../components/products/ProductTable'
import StockistsList from '../pages/stockist/StockistsList'


const RoutesSite = () => {
  return (
    <div>
      <nav>
        <Link to="/stockists">Stockists</Link>
        <Link to="/products">Products</Link>
      </nav>
      <nav>
        <Routes>
          <Route path="/stockists" element = {< StockistsList />} />
          <Route path="products" element = {< ProductTable />} />
        </Routes>
      </nav>
    </div>
  )
}

export default RoutesSite