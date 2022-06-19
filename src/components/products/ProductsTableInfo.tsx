import * as React from 'react';
import { productType } from '../../state/slices/ProductSlice';

type ProductTypeProps = {
    props: productType
}

const ProductsTableInfo : React.FC<ProductTypeProps> = ({props}) => {
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
          </tr>
      </tbody>
  );
};

export default ProductsTableInfo;
