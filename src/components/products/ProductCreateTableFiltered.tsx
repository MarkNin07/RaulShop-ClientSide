import * as React from 'react';
import { addProd } from '../../state/slices/OrderSlice';
import { productType } from '../../state/slices/ProductSlice';
import { useAppDispatch } from '../../state/store';

interface IProductPropsType {
    props: productType
}

const Product: React.FC<IProductPropsType> = ({props}) => {

    const dispatch = useAppDispatch()

    const productsCar = (props: productType, quantity: number) => {
        const updateProduct: productType ={
            productId: props.productId,
            productName: props.productName,
            price: props.price,
            sold: quantity,
            description: props.description,
            minProdAmount: props.minProdAmount,
            maxProdAmount: props.maxProdAmount,
            unitsAvailable: props.unitsAvailable,
            stockist: props.stockist
        }
        dispatch(addProd(updateProduct))
    }

    if(props.unitsAvailable === 0){
        return <></>
    }

  return (
      <tbody>
          <tr>
          <td>{props.productName}</td>
          <td>{props.price}</td>
          <td>{props.sold}</td>
          <td>{props.description}</td>
          <td>{props.minProdAmount}</td>
          <td>{props.maxProdAmount}</td>
          <td>{props.unitsAvailable}</td>
          <td>{props.stockist.stockistName}</td>
          <td><input type="number" min="0" max={props.unitsAvailable} onChange={(e) => productsCar(props, Number(e.target.value))} /></td>
          </tr>
      </tbody>
  );
};

export default Product;
