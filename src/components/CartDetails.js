import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList"
import { clearItems } from "./utils/cartSlice";


const CartDetails = ()=>{

    const dispetch = useDispatch();

    const hendleClearCart = ()=>{
        dispetch(clearItems());
    }

    const cartItems = useSelector((store)=>store.cart_bag.items)

    return (
        <div className="border border-black p-4 m-4">
            <div className="m-auto p-4 border border-b-2 shadow-sm">
                <h2 className="m-auto text-center font-bold text-lg">Your Order List</h2>
            </div>

            <div className="w-[50rem] m-auto border border-black border-dotted shadow-lg shadow-green-300 p-4 m-4">
            <button className="m-4 px-[2rem] hover:bg-red-700 hover:text-white border bg-green-300 bg-opacity-70 rounded-lg"
            onClick={hendleClearCart}
            >Clear Cart</button>
            {cartItems.length === 0 && <h1 className="text-gray-400 text-center">Cart is Empty</h1> }
            <ItemList items = {cartItems} />
            </div> 
        </div>
    );
};

export default CartDetails; 