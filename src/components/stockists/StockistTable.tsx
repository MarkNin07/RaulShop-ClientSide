import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import getAllStockists from '../../actions/stockists/GetAllStockists';
import { possibleStatus } from '../../configuration/PossibleStatus';
import { selectStockistsFetchError, selectStockistsState, selectStockistsStatus } from '../../state/slices/ProviderSlice'
import { useAppDispatch } from '../../state/store';
import StockistTableInfo from './StockistTableInfo';

interface IStockistFormProps {
    
}

const StockistTable : React.FC<IStockistFormProps> = () => {
    
    const dispatch = useAppDispatch();

    useEffect(() => {
        if(status === possibleStatus.IDLE){
            dispatch(getAllStockists())
        }
    }, [dispatch]);

    const getStockist = useSelector(selectStockistsState())
    const status = useSelector(selectStockistsStatus())
    const error = useSelector(selectStockistsFetchError())
    
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Stockist Id</th>                      
                    <th>Stockist Name</th>
                    <th>stockist Personal Id</th>
                    <th>Phone Number</th>                      
                </tr>
            </thead>
            {!error && getStockist.map((stockist) =>
             <StockistTableInfo key={stockist.stockistId} props={stockist} /> )} 
        </table>
    </div>
  )
}

export default StockistTable