import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import ProductListTableFiltered from "../../components/products/ProductListTableFiltered"
import { RootState } from "../../state/store"

const SubmitBill = () => {

    const {user} = useSelector((state:RootState) => state.login)

    const navigate = useNavigate()
  
    useEffect(() => {
      if(user === false){
        navigate('/')
      }
    }, [])


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