import { createContext, useEffect, useState } from "react";
// import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import axios from 'axios'


export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = "₹";
    const delivery_fee = 10;
    const backendUrl = import.meta.env.VITE_BACKEND_URI;
    const [search, setSearch] = useState('')
    const [showSearch, setShowSearch] = useState(false)
    const [cartItems, setCartItems] = useState({})
    const [products , setProducts] = useState([])
    const [token ,setToken] = useState('')
    const navigate = useNavigate()

    const addToCart = async(itemId, size) => {

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

        if (token) {
            try {
                await axios.post(backendUrl + '/api/cart/add' , {itemId ,size} , {headers : {token}})
            } catch (error) {
                console.log(error);
                toast.error(error.message)
                
            }
        }
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

    if (token) {
        try {
            await axios.post(backendUrl + '/api/cart/update', {itemId , size , quantity} , {headers : {token}})
            // console.log(res.data);
            
        } catch (error) {
            console.log(error);
            toast.error(error.message)
            
        }
    }
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


const getProductsData = async () => {
  try {
    // console.log(backendUrl);
    
    const res = await axios.get(backendUrl + '/api/product/list');
    if (res.data.success) {
        setProducts(res.data.products);
    }else{
        toast.error(res.data.message)
    }
   
  } catch (error) {
    console.error("Error:", error);
    toast.error(error.message)
  }
};

const getUserCart = async(token)=>{
    try {
        const res = await axios.post(backendUrl + '/api/cart/get' , {} , {headers : {token}})
        if (res.data.success) {
            setCartItems(res.data.cartData)
        }
    } catch (error) {
        console.error("Error:", error);
        toast.error(error.message)
    }
}


useEffect(()=>{
    getProductsData()
},[])

useEffect(()=>{
    if (!token && localStorage.getItem('token')) {
        setToken(localStorage.getItem('token'))
        getUserCart(localStorage.getItem('token'))
    }
})


    const value = {
        products, currency, delivery_fee, search, setSearch, showSearch, setShowSearch, setCartItems,cartItems, addToCart, getCartCount,updateQuantity , getCartAmount, navigate , backendUrl,setToken,token
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;