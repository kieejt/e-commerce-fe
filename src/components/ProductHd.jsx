import React from 'react'
import { TbArrowRight } from 'react-icons/tb'
import { NavLink } from 'react-router-dom';

const ProductHd = (props) => {
    const {product} = props;
  return (
    <div className="flex items-center flex-wrap gap-x-2 medium-16 my-4 capitalize">
        <NavLink to={'/'} ><div className="flexCenter gap-x-1">Home</div></NavLink> <TbArrowRight/> Shop <TbArrowRight/> <NavLink to={`/${product.category.toLowerCase()}s`} ><div className="flexCenter gap-x-1">{product.category}s</div></NavLink>
        <TbArrowRight /> {product.name}
    </div>
  )
}

export default ProductHd