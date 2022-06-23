export default function AddProduct(){
    return (
        <div>
            <form>
                <label>Product name</label>
                <input type="text" placeholder="Product name"/>
                <label>Description</label>
                <input type="text" placeholder="Description" />
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}