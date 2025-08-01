import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const AboutUs = () => {
  return (
    <div>

    <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
    </div>

    <div className="my-10 flex flex-col md:flex-row gap-16">
      <img className='w-full md:max-w-[450px] ' src={assets.about_img} alt="" />
      <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia tempore nulla ullam dolores fugiat itaque.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quidem itaque unde tempore voluptatibus laborum?</p>
      <b className='text-gray-800'>Our Mission</b>
      <p>Our mission at abc is to empower customers with choice , convenience andd confidence. We're decide to provideing a seamless shopping experience that exceeds expectations,from browsing and ordering to delivery and beyond. </p>
      
      </div>
    </div>
    <div className='text-xl py-4'>
      <Title text1={'WHY'} text2={'CHOOSE US'} />
    </div>
    <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality assurance </p>
        </div>
           <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className='text-gray-600'>With our user-friendly interface and hassle-free orderinng process, shoopping has never been. </p>
        </div>
            <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service :</b>
          <p className='text-gray-600'> Our team of dedication professionals is here to assist you the way, ensuring your satisfaction is our top priority. </p>
        </div>
    </div>
    <NewsletterBox />
    </div>
  )
}

export default AboutUs