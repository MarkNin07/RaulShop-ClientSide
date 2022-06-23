import { nanoid } from "@reduxjs/toolkit"
import moment from "moment"
import { useState } from "react"
import { useSelector } from "react-redux"
import createNewBill from "../../actions/bills/CreateBill"
import updateProduct from "../../actions/products/PutProduct"
import ProductOrderTable from "../../components/products/ProductOrderTable"
import { billType } from "../../state/slices/BillSlice"
import { emptyProducts, orderType } from "../../state/slices/OrderSlice"
import { productType } from "../../state/slices/ProductSlice"
import { RootState, useAppDispatch } from "../../state/store"

const ProductOrder = () => {

    const order = useSelector((state: RootState) => state.order)

    const auxState : orderType ={
        productListSale: []
    }

    let test = [...order.productListSale]

    test.reduceRight((acc, obj, i) => {
        acc[obj.productId] ? test.splice(i, 1) : acc[obj.productId] = true;
        return acc;
    }, Object.create(null));

    test.map(object => 
        auxState.productListSale.push(object))

    let total = auxState.productListSale.map(product => product.price * product.sold).reduce((a, b) => a + b, 0)

    const [clientName, setClientName] = useState('');
    const [salesPerson, setSalesperson] = useState('');

    const dispatch = useAppDispatch();

    const onOrder = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(clientName && salesPerson && total != 0) {
            const addBill : billType ={
                billId: nanoid(),
                date: moment(new Date()).format("MM/DD/YYYY hh:mm:ss"),
                clientName: clientName,
                salesPerson: salesPerson,
                totalBill: total,
                products: auxState.productListSale
            }
            console.log(auxState.productListSale);
            

            dispatch(createNewBill(addBill))
            dispatch(emptyProducts())

            let productToUpdate = [...auxState.productListSale]

            productToUpdate.map(prod => {
                const productUpdated : productType = {
                    productId: prod.productId,
                    productName: prod.productName,
                    price: prod.price,
                    sold: 0,
                    description: prod.description,
                    minProdAmount: prod.minProdAmount,
                    maxProdAmount: prod.maxProdAmount,
                    unitsAvailable: prod.unitsAvailable - prod.sold,
                    stockist: prod.stockist
                }

                if(productUpdated.minProdAmount > productUpdated.unitsAvailable){
                    alert("This product might be out of stock soon. Contact your provider")
                }

                dispatch(updateProduct(productUpdated))
            })
        }else{
            alert("All fields must be filled")
        }
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                {< ProductOrderTable props={auxState} />}
            </table>
            <form onSubmit={(e) => onOrder(e)}>
                <label>Total: </label>
                <input type="number" value={total} />
                <br />
                <label>Client name: </label>
                <input type="text" placeholder="Client name" value={clientName} onChange={(e) => setClientName(e.target.value)}/>
                <br />
                <label>Salesperson: </label>
                <input type="text" value={salesPerson} onChange={(e) => setSalesperson(e.target.value)}/>
                <br />
                <input type="submit" value="Order" />
                <br />
                <br />

            </form> 
        </div>
    )
}

export default ProductOrder