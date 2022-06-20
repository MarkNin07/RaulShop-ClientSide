import { nanoid } from '@reduxjs/toolkit';
import * as React from 'react';
import { useState } from 'react';
import createStockist from '../../actions/stockists/PostNewStockist';
import { stockistType } from '../../state/slices/ProviderSlice';
import { useAppDispatch } from '../../state/store';

interface IStockistFormProps {
}

const StockistForm: React.FC<IStockistFormProps> = (props) => {

    const [stockistName, setStockistName] = useState('');
    const onChangeStockistName = (e:React.ChangeEvent<HTMLInputElement>) =>
        setStockistName(e.target.value)

    const [stockistPersonalId, setStockistPersonalId] = useState('');
    const onChangePersonalID = (e:React.ChangeEvent<HTMLInputElement>) =>
        setStockistPersonalId(e.target.value)

    const [phoneNumber, setPhoneNumber] = useState('');
    const onChangePhoneNumber = (e:React.ChangeEvent<HTMLInputElement>) =>
        setPhoneNumber(e.target.value)

    const dispatch = useAppDispatch()

    const addStockist = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(stockistName && stockistPersonalId && phoneNumber){
            const newStockist : stockistType = {
                stockistId: nanoid(),
                stockistName,
                stockistPersonalId,
                phoneNumber
            }
            
            dispatch(createStockist(newStockist))
            setStockistName('')
            setStockistPersonalId('')
            setPhoneNumber('')
        }        
    }
  

  return (
      <div>
          <form onSubmit={addStockist}>
              <label>Stockist Name</label>
              <input type="text" value={stockistName} placeholder="Set Stockist Name" onChange={onChangeStockistName} />
              <br/>
              <label>Stockist Personal Id</label>
              <input type="text" value={stockistPersonalId} placeholder="Set Stockist Personal ID" onChange={onChangePersonalID} />
              <br/>
              <label>Phone Number</label>
              <input type="text" value={phoneNumber} placeholder="Set Stockist Phone Number" onChange={onChangePhoneNumber} />
              <br/>
              <input type="submit" value="Submit" />
          </form>
      </div>
  );
};

export default StockistForm;
