import * as React from 'react';
import { billType } from '../../state/slices/BillSlice';

type BillTypeProps = {
    props: billType
}

const BillsTableInfo: React.FC<BillTypeProps> = ({props}) => {
  return (
    <tbody>
        <tr>
            <td>{props.billId}</td>
            <td>{props.date}</td>
            <td>{props.clientName}</td>                      
            <td>{props.salesPerson}</td>                      
            <td>{props.totalBill}</td>                      
            <td>
                <table>
                    <tbody>
                        {props.products.map((product) => {
                            return <tr key={product.productId}>
                                <td>{product.productName}</td>
                                <td>{product.price}</td>                            
                            </tr>
                        })}
                    </tbody>
                </table>
            </td>                       
        </tr>
    </tbody>
  ) ;
};

export default BillsTableInfo;
