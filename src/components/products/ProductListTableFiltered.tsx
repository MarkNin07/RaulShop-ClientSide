import * as React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import getAllProducts from '../../actions/products/GetAllProducts';
import { possibleStatus } from '../../configuration/PossibleStatus';
import { selectProductFetchError, selectProductState, selectProductStatus } from '../../state/slices/ProductSlice';
import { useAppDispatch } from '../../state/store';
import Product from './ProductCreateTableFiltered';

interface IProductBillListProps {
}

const ProductListTableFiltered: React.FC<IProductBillListProps> = () => {

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (status === possibleStatus.IDLE){
      dispatch(getAllProducts())
    }
  }, [dispatch])

  const getProduts = useSelector(selectProductState())
  const status = useSelector(selectProductStatus())
  const error = useSelector(selectProductFetchError())
  
  return (
      <div>
          <table>
              <thead>
                  <tr>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Sold</th>
                    <th>Description</th>
                    <th>minimum Product Amount</th>
                    <th>maximun Product Amount</th>
                    <th>Units Available</th>
                    <th>Provider</th>
                    <th>Quantity</th>
                  </tr>
              </thead>
              {!error && getProduts.map((product) => <Product key={product.productId} props={product}/>)}
              
          </table>
      </div>
  );
};

export default ProductListTableFiltered;
