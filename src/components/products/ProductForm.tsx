import { nanoid } from '@reduxjs/toolkit';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import createProduct from '../../actions/products/PostNewProduct';
import getAllStockists from '../../actions/stockists/GetAllStockists';
import { productType } from '../../state/slices/ProductSlice';
import { selectStockistsState, stockistType } from '../../state/slices/ProviderSlice';
import { useAppDispatch } from '../../state/store';

interface IProductFormProps {
}

const ProductForm: React.FC<IProductFormProps> = (props) => {

    const [productName, setProductName] = useState('');
    const onChangeProdName = (e:React.ChangeEvent<HTMLInputElement>) => 
        setProductName(e.target.value)

    const [price, setPrice] = useState(0);

    const [description, setDescription] = useState('');
    const onChangeDescription = (e:React.ChangeEvent<HTMLInputElement>) =>
        setDescription(e.target.value)

    const [minProdAmount, setMinProdAmount] = useState(0);

    const [maxProdAmount, setMaxProdAmount] = useState(0);

    const [unitsAvailable, setUnitsAvailable] = useState(0);

    const [stockist, setStockist] = useState({} as stockistType);

    const dispatch = useAppDispatch()

    useEffect(() => {dispatch(getAllStockists())}, [dispatch]);

    const addProd = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(productName && price && description && minProdAmount && maxProdAmount && unitsAvailable && stockist && (price > 0 && minProdAmount > 0) && (minProdAmount < maxProdAmount)) {
            const addProduct : productType = {
                productId: nanoid(),
                productName: productName,
                price: price,
                sold: 0,
                stock: 0,
                description: description,
                minProdAmount: minProdAmount,
                maxProdAmount: maxProdAmount,
                unitsAvailable: unitsAvailable,
                stockist: stockist
            }
            dispatch(createProduct(addProduct))
            setProductName('')
            setPrice(0)
            setDescription('')
            setMinProdAmount(0)
            setMaxProdAmount(0)
            setUnitsAvailable(0)
            setStockist({} as stockistType)
        }else{
            alert('All the fields must be provided, maximum stock must be greater than minimum stock and values must be greater than zero')

        }
    }

    const getStockists = useSelector(selectStockistsState())

    const selectStockistOnList = (e: React.ChangeEvent<HTMLSelectElement>) => 
    {
        setStockist(getStockists.filter((providers) => providers.stockistId === e.target.value)[0])
    }


  return (
      <div className="form-created">
          <form onSubmit={addProd}>
              <label>Product Name: </label>
              <input type="text" value={productName} onChange={onChangeProdName} />
              <br/>
              <label>Price: </label>
              <input type="number" value={price} onChange={(e) => setPrice(parseInt(e.target.value))}/>
              <br/>
              <label>Description: </label>
              <input type="text" value={description} onChange={onChangeDescription} />
              <br/>
              <label>Minimum product amount: </label>
              <input type="number" value={minProdAmount}
               onChange={(e) => setMinProdAmount(parseInt(e.target.value))}/>
                <br/>
              <label>Maximum product amount: </label>
              <input type="number" value={maxProdAmount} 
               onChange={(e) => setMaxProdAmount(parseInt(e.target.value))}/>
                <br/>
              <label>Units available: </label>
              <input type="number" value={unitsAvailable} 
               onChange={(e) => setUnitsAvailable(parseInt(e.target.value))}/>
                <br/>
               <label>Select a Provider</label>
               <select name="stockists" id="stockists" onChange={(e) => selectStockistOnList(e)}>
                   <option>Select a Provider</option>
                   {getStockists.map((stockist) => 
                        <option key={stockist.stockistId} value={stockist.stockistId}>{stockist.stockistName}</option>)}
               </select>
               <br/> <br />
               <input type="submit" id="submit" value="Submit"/>
          </form>
      </div>
  );
};

export default ProductForm;
