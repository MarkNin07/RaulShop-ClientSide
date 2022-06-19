import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import getAllProducts from '../../actions/products/GetAllProducts'
import { possibleStatus } from '../../configuration/PossibleStatus'
import { selectProductFetchError, selectProductState, selectProductStatus } from '../../state/slices/ProductSlice'
import { useAppDispatch } from '../../state/store'
import ProductsTableInfo from './ProductsTableInfo'

const ProductTable = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        if(status === possibleStatus.IDLE){
            dispatch(getAllProducts())
        }
    }, [dispatch]);

    const getProducts = useSelector(selectProductState())
    const status = useSelector(selectProductStatus())
    const error = useSelector(selectProductFetchError())

  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Product Id</th>                      
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>description</th>                      
                    <th>Minimun Amount</th>
                    <th>Maximun Amount</th>
                    <th>Units Available</th>                      
                    <th>Stockist</th>                      
                </tr>
            </thead>
            {!error && getProducts.map((product) => <ProductsTableInfo key={product.productId} props={product}/> )}
        </table>
    </div>
  )
}

export default ProductTable