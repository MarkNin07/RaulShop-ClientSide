import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import StockistsList from '../pages/stockist/StockistsList'


const RoutesSite = () => {
  return (
    <div>
      <nav>
        <Link to="/stockists">Stockists</Link>
      </nav>
      <nav>
        <Routes>
          <Route path="/stockists" element = {< StockistsList />} />
        </Routes>
      </nav>
    </div>
  )
}

export default RoutesSite