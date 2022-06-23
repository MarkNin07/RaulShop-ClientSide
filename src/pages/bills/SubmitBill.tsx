import { useNavigate } from "react-router-dom"
import ProductListTableFiltered from "../../components/products/ProductListTableFiltered"

const SubmitBill = () => {

    let navigate = useNavigate()

    return (
        <div>
            <h1>Create a new order</h1>
            <form onSubmit={() => navigate("/order")}>
                <ProductListTableFiltered />
                <button type="submit">Submit </button>
            </form>
        </div>
    )
}

export default SubmitBill