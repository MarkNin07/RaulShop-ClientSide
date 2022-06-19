import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import getAllReceipts from '../../actions/receipts/GetAllReceipts';
import { possibleStatus } from '../../configuration/PossibleStatus';
import { selectReceiptsFetchError, selectReceiptsState, selectReceiptsStatus } from '../../state/slices/ReceiptSlice';
import { useAppDispatch } from '../../state/store';
import ReceiptsTableInfo from './ReceiptsTableInfo';


const ReceiptsTable = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        if(status === possibleStatus.IDLE){
            dispatch(getAllReceipts())
        }
    }, [dispatch])

    const getReceipts = useSelector(selectReceiptsState())
    const status = useSelector(selectReceiptsStatus())
    const error = useSelector(selectReceiptsFetchError())

  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Receipt Id</th>                      
                    <th>Quantity</th>
                    <th>Date</th>
                    <th>Product ID</th>                      
                    <th>Product Name</th>
                    <th>Provider Name</th>                                            
                </tr>
            </thead>
            {!error && getReceipts.map((receipt) => <ReceiptsTableInfo key={receipt.receiptId} props={receipt}/> )}
        </table>
    </div>
  )
}

export default ReceiptsTable