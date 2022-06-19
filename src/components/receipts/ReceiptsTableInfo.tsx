import * as React from 'react';
import { receiptType } from '../../state/slices/ReceiptSlice';

interface IReceiptsTableInfoProps {
    props: receiptType
}

const ReceiptsTableInfo: React.FC<IReceiptsTableInfoProps> = ({props}) => {
  return (
    <tbody>
        <tr>
            <td>{props.receiptId}</td>
            <td>{props.quantity}</td>
            <td>{props.date}</td>
            <td>{props.product.productId}</td>
            <td>{props.product.productName}</td>
            <td>{props.product.stockist.stockistName}</td>
        </tr>
    </tbody>
  );
};

export default ReceiptsTableInfo;
