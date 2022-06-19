import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import getAllBills from '../../actions/bills/GetAllBills';
import { possibleStatus } from '../../configuration/PossibleStatus';
import { selectBillFetchError, selectBillState, selectBillStatus } from '../../state/slices/BillSlice';
import { useAppDispatch } from '../../state/store';
import BillsTableInfo from './BillsTableInfo';

type Props = {}

const BillTable = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        if(status === possibleStatus.IDLE){
            dispatch(getAllBills())
        }
    }, [dispatch]);

    const getBills = useSelector(selectBillState())
    const status = useSelector(selectBillStatus())
    const error = useSelector(selectBillFetchError())

  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Bill Id</th>                      
                    <th>Date</th>
                    <th>Client Name</th>
                    <th>SalesPerson</th>                      
                    <th>Total Bill</th>
                    <th>Products</th>                   
                </tr>
            </thead>
            {!error && getBills.map((bill) => <BillsTableInfo key={bill.billId} props={bill} /> )}
        </table>
    </div>
  )
}

export default BillTable