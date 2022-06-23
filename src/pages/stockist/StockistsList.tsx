import * as React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import StockistTable from '../../components/stockists/StockistTable';
import { RootState } from '../../state/store';

const StockistsList = () => {

  const {user} = useSelector((state:RootState) => state.login)

  const navigate = useNavigate()

  useEffect(() => {
    if(user === false){
      navigate('/')
    }
  }, [])

  return (
      <div>
          <h1>Stockists List</h1>
          <StockistTable />
      </div>
  );
};

export default StockistsList;
