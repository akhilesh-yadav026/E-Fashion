import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = "₹";
    const delivery_fee = 10;
    const [search, setSearch] = useState('')
    const [showSearch, setShowSearch] = useState(false)
    const [cartItems, setCartItems] = useState({})
    const navigate = useNavigate()

    const addToCart = (itemId, size) => {

        if (!size) {
            toast.error('Select Product Size')
            return;
        }
        let cartData = structuredClone(cartItems);
        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        }
        else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItems(cartData)
    }

  const getCartCount = () => {
    let totalCount = 0;
    for (const itemId in cartItems) {
        const sizeData = cartItems[itemId];
        for (const size in sizeData) {
            const quantity = sizeData[size];
            if (quantity > 0) {
                totalCount += quantity;
            }
        }
    }
    return totalCount;
};

{/* <div>
    // itemId loops through each product in the cart.

// sizeData represents the object of sizes and quantities for that product.

// size loops through the available sizes.

// quantity is the count for each size.
</div> */}

const updateQuantity =async(itemId,size,quantity)=>{
    let cartData = structuredClone(cartItems)
    cartData[itemId][size] = quantity;
    setCartItems(cartData)
}

const getCartAmount =()=>{
    let totalamount = 0;
    for(const items in cartItems){
        let itemInfo = products.find((product)=>product._id === items );
        for(const item in cartItems[items]){
            try {
                if (cartItems[items][item] > 0) {
                    totalamount += itemInfo.price * cartItems[items][item];
                }
            } catch (error) {
                
            }
        }

    }
        return totalamount;
}


    const value = {
        products, currency, delivery_fee, search, setSearch, showSearch, setShowSearch, cartItems, addToCart, getCartCount,updateQuantity , getCartAmount, navigate
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;