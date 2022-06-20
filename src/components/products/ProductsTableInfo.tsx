import * as React from 'react';
import deleteProduct from '../../actions/products/DeleteProduct';
import { productType } from '../../state/slices/ProductSlice';
import { useAppDispatch } from '../../state/store';

type ProductTypeProps = {
    props: productType
}

const ProductsTableInfo : React.FC<ProductTypeProps> = ({props}) => {

    const dispatch = useAppDispatch()

    const onDeleteProd = (props: productType) => {
        dispatch(deleteProduct(props))        
    }

  return (
      <tbody>
          <tr>
            <td>{props.productId}</td>
            <td>{props.productName}</td>
            <td>{props.price}</td>                      
            <td>{props.description}</td>                      
            <td>{props.minProdAmount}</td>                      
            <td>{props.maxProdAmount}</td>                      
            <td>{props.unitsAvailable}</td>                      
            <td>{props.stockist.stockistName}</td>  
            <td>
                <button onClick={() => onDeleteProd(props)}>Delete</button>
            </td>                  
          </tr>
      </tbody>
  );
};

export default ProductsTableInfo;
