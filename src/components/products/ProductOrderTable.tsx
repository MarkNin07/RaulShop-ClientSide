import * as React from 'react';
import { orderType } from '../../state/slices/OrderSlice';

interface IOrderTableProps {
    props: orderType
}

const ProductOrderTable: React.FC<IOrderTableProps> = ({props}) => {
  return (
      <tbody>
          {props.productListSale.map((prod) => {
              return <tr>
                  <td>{prod.productName}</td>
                  <td>{prod.price}</td>
                  <td>{prod.sold}</td>
              </tr>
          })}
      </tbody>
  ) ;
};

export default ProductOrderTable;
