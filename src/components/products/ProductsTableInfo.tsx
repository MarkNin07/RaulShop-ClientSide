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
              <th>{props.price}</th>                      
              <th>{props.description}</th>                      
              <th>{props.minProdAmount}</th>                      
              <th>{props.maxProdAmount}</th>                      
              <th>{props.unitsAvailable}</th>                      
              <th>{props.stockist.stockistName}</th>                    
          </tr>
      </tbody>
  );
};

export default ProductsTableInfo;
