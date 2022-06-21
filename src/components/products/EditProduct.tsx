import * as React from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import updateProduct from '../../actions/products/PutProduct';
import { productType } from '../../state/slices/ProductSlice';
import { useAppDispatch } from '../../state/store';
import moment from "moment";
import { receiptType } from '../../state/slices/ReceiptSlice';
import { nanoid } from '@reduxjs/toolkit';
import createNewReceipt from '../../actions/receipts/PostNewReceipt';


interface IEditProductProps {
}

const EditProduct: React.FC<IEditProductProps> = (props) => {

    interface stateToEdit {
        updProd: productType
    }

    const location = useLocation()
    const localState= location.state as stateToEdit
    const {updProd} = localState

    const dispatch = useAppDispatch()

    const [description, setDescription] = useState(updProd.description);
    const [price, setPrice] = useState(updProd.price);
    const [unitsAvailable, setUnitsAvailable] = useState(updProd.unitsAvailable);
    const [addStock, setAddStock] = useState(0);

    const onEditProd = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        if(description && price && addStock ){
           
            const productUpdated : productType = {
                productId: updProd.productId,
                productName: updProd.productName,
                price: price,
                sold: 0,
                description: updProd.description,
                minProdAmount: updProd.minProdAmount,
                maxProdAmount: updProd.maxProdAmount,
                unitsAvailable: updProd.unitsAvailable + addStock,
                stockist: updProd.stockist                
            }  

            dispatch(updateProduct(productUpdated))

            let dateNow = moment(new Date()).format('MM/DD/YY hh:mm:ss')

            if(addStock != 0){
                const receiptCreated : receiptType = {
                    receiptId: nanoid(),
                    quantity: addStock,
                    date: dateNow,
                    product: productUpdated
                }

                dispatch(createNewReceipt(receiptCreated))
            }
        }else if(unitsAvailable + addStock > updProd.maxProdAmount){
            alert('You cannot add more stock to this product')
        }else{
            alert('You cannot keep empty fields')
        }
    }


  return (
      <div>
          <form onSubmit={onEditProd}>
              <h1>Edit Product {updProd.productName}</h1>
              <label>Update Description</label>
              <input type="text" placeholder={updProd.description} onChange={(e) => 
                setDescription(e.target.value)} />
              <br/>

              <label>Price</label>
              <input type="text" min="0" placeholder={String(updProd.price)}
               onChange={(e) => setPrice(Number(e.target.value))} />
              <br/>

              <label>Stock Available</label>
              <input type="text" placeholder={String(updProd.unitsAvailable)} readOnly />
              
              <label>Add Stock</label>
              <input type="number" min="0" max={updProd.maxProdAmount - updProd.unitsAvailable}
               onChange={(e) => setAddStock(Number(e.target.value))} />
              <input type="submit" value="Update" />          
          </form>
      </div>
  );
};

export default EditProduct;
