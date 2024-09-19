import React, { useState } from 'react'
import CardButton from '../atoms/CardButton'
import { FaRegHeart } from 'react-icons/fa'
import { HiOutlineEye } from 'react-icons/hi'
import RatingStar from '../molecules/RatingStar'
import { Link, useLocation } from 'react-router-dom'
import { MdDelete } from 'react-icons/md'
import { useSelector } from 'react-redux'

const ProductCard = ({
  _id,
  image,
  productName,
  productPrice,
  discount,
  discountPice,
  ratingCount,
}) => {
  const location = useLocation()
  const isWishlist = location.pathname === '/wishlist'
  const [visible, setVisible] = useState(isWishlist)

  const handleWishListClick = () => {
    console.log('Add Wishlist')
  }

  const { user } = useSelector((state) => state.user)
  const userRole = user ? user.role : null
  const isDisabled = userRole === 'admin'

  return (
    <div
      className='font-poppins mx-auto'
      onMouseEnter={() => !isWishlist && setVisible(true)}
      onMouseLeave={() => !isWishlist && setVisible(false)}
    >
      <div className='bg-slate-200 relative flex flex-col rounded justify-center w-64 h-56'>
        <div className='bg-red-500 rounded px-3 py-1 w-14 text-sm text-white absolute top-2 left-2'>
          <span>-{discount}%</span>
        </div>
        <div className='top-2 right-0 absolute cursor-pointer'>
          {!isWishlist ? (
            <>
              {!isDisabled && (
                <CardButton
                  onClick={handleWishListClick}
                  name={<FaRegHeart />}
                />
              )}
              <Link to={`/products/${_id}`}>
                <CardButton name={<HiOutlineEye />} />
              </Link>
            </>
          ) : (
            <CardButton name={<MdDelete color='red' />} />
          )}
        </div>
        <div className=' flex-grow flex items-center'>
          <img
            src={image}
            alt='Product'
            className='bg-cover p-6 object-fill rounded mx-auto'
          />
        </div>
        <div>
          {visible && !isDisabled && (
            <button className='w-full absolute bottom-0 ease-in duration-200 bg-black py-1.5 rounded-b text-white flex justify-center items-end text-center'>
              Add To Cart
            </button>
          )}
        </div>
      </div>
      <div className=' space-y-2 font-medium py-2'>
        <h1>{productName}</h1>
        <div className='flex gap-2'>
          <span className=' text-red-500'>{discountPice}</span>
          <span className=' line-through text-gray-400'>${productPrice}</span>
        </div>
        <div className='flex gap-2'>
          <RatingStar />
          <span className='text-sm text-gray-400'>{ratingCount || 22}</span>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
