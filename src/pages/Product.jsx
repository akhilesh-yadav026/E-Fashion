import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProduct from '../components/RelatedProduct';

const Product = () => {

  const { productId } = useParams();
  const { products, currency , addToCart } = useContext(ShopContext)
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('')
  const [size, setSize] = useState('')

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        // console.log(item);
        setImage(item.image[0])
        return null;

      }
    })
  }

  useEffect(() => {
    fetchProductData();
  }, [products, productId])

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>

      {/* Product Data */}

      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">

        {/* Product Images */}

        <div className="flex flex-col-reverse gap-3 sm:flex-row">
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item, index) => (
                <img onClick={() => setImage(item)} src={item} key={index} alt="" className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer" />
              ))
            }
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} alt="" className="w-full h-auto" />
          </div>
        </div>

        {/* Product Info */}

        <div className="flex-1">
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className="flex item-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_dull_icon} alt="" className="w-3.5" />
            <p className="pl-2">(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item, index) => (
                <button onClick={() => setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''} `} key={index}>
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button onClick={()=>addToCart(productData._id , size)} className='bg-black py-2 px-8 text-base text-white active:bg-gray-700'>ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5' />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>✅ 100% Original product</p>
            <p>💰 Cash on delivery available</p>
            <p>🔁 Easy return and exchange within 7 days</p>

          </div>
        </div>
      </div>
      {/* Description and Review Section */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Review (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur eaque ut aut officiis asperiores odit praesentium provident mollitia? Similique harum labore quas odio beatae error accusantium nam odit. Quis sit assumenda illo deleniti sed est rerum eveniet ipsum sapiente exercitationem?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ducimus rem modi maxime, illum distinctio minima, mollitia natus explicabo nam voluptatem optio in quaerat sequi fugiat, laudantium tenetur omnis exercitationem iste dolore quas cumque totam tempora. Perspiciatis similique ipsa saepe!</p>
        </div>
      </div>

      {/* Display Related Products */}

      <RelatedProduct category={productData.category} subCategory={productData.subCategory} />

    </div>



  ) : <div className="opacity-0"></div>
}

export default Product