import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'

const Orders = () => {
  const { currency, products } = useContext(ShopContext)

  return (
    <div className='border-t pt-16'>
      <div className="text-2xl">
        <Title text1={'MY'} text2={'ORDER'} />
      </div>
      <div>
        {products.slice(1, 4).map((item) => (
          <div key={item.id || item.name} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
            <div className="flex items-start gap-6 text-sm w-full md:w-auto">
              <img className='w-16 sm:w-20' src={item.image?.[0] || '/placeholder.jpg'} alt={`Image of ${item.name}`} />
              <div>
                <p className='sm:text-base font-medium'>{item.name}</p>
                <div className="flex items-center gap-3 mt-2 text-base text-gray-500">
                  <p className='text-lg'>{currency}{item.price}</p>
                  <p>Quantity: 1</p>
                  <p>Size: M</p>
                </div>
                <p className='mt-2'>Date: <span className='text-gray-400'>25 Jun 2025</span></p>
              </div>
            </div>

            <div className='md:w-1/2 flex justify-between mt-2 md:mt-0'>
              <div className="flex items-center gap-2">
                <p className='w-2 h-2 rounded-full bg-green-500'></p>
                <p className='text-sm md:text-base'>Ready To Ship</p>
              </div>
              <button className='border px-4 py-2 text-sm font-medium rounded-sm'>Track Order</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Orders
