import React, { useContext, useState } from 'react'
import product_rt_1 from "../assets/product_rt_1.png"
import product_rt_2 from "../assets/product_rt_2.png"
import product_rt_3 from "../assets/product_rt_3.png"
import product_rt_4 from "../assets/product_rt_4.png"
import { MdStar } from 'react-icons/md'
import { ShopContext } from '../Context/ShopContext'
const ProductDisplay = (props) => {

    const {product} = props;
    const {addToCart} = useContext(ShopContext);

    const [size, setSize] = useState("S");
    
  return (
    <section>
        <div className='flex flex-col gap-14 xl:flex-row'>
            {/*left side*/}
            <div className='flex gap-x-2'>
                <div className='flex flex-col gap-[7px] flex-wrap'>
                    <img src={product_rt_1} alt="prdctImg" className='max-h-[99px]'></img>
                    <img src={product_rt_2} alt="prdctImg" className='max-h-[99px]'></img>
                    <img src={product_rt_3} alt="prdctImg" className='max-h-[99px]'></img>
                    <img src={product_rt_4} alt="prdctImg" className='max-h-[99px]'></img>
                </div>
                <div>
                    <img src={product.image} alt=""/>
                </div>
            </div>
            {/*Right side*/}
            <div className='flex-col flex xl:flex-[1.7]'>
                <h3 className='h3'>{product.name}</h3>
                <div className='flex gap-x-2 text-secondary medium-22'>
                    <MdStar />
                    <MdStar />
                    <MdStar />
                    <MdStar />
                    <MdStar />
                    <p>(111)</p>
                </div>
                <div className='flex gap-x-6 medium-20 my-4'>
                    <div className='line-through'>{product.old_price}$</div>
                    <div className='text-secondary'>{product.new_price}$</div>
                </div>
                <div className="mb-4">
                    <h4 className='bold-16'>Select Size:</h4>
                    <div className='flex gap-3 my-3'>
                        <button onClick={() => setSize("S")} className={`h-10 w-10 flexCenter ${size === "S" ? "ring-2 ring-slate-900" : "ring-2 ring-slate-900/10"}`}>S</button>
                        <button onClick={() => setSize("M")} className={`h-10 w-10 flexCenter ${size === "M" ? "ring-2 ring-slate-900" : "ring-2 ring-slate-900/10"}`}>M</button>
                        <button onClick={() => setSize("L")} className={`h-10 w-10 flexCenter ${size === "L" ? "ring-2 ring-slate-900" : "ring-2 ring-slate-900/10"}`}>L</button>
                        <button onClick={() => setSize("XL")} className={`h-10 w-10 flexCenter ${size === "XL" ? "ring-2 ring-slate-900" : "ring-2 ring-slate-900/10"}`}>XL</button>
                    </div>
                    <div className='flex flex-col gap-y-3 mb-4 max-w-[555px]'>
                        <button onClick={() => {addToCart(product.id)}} className='btn_dark_outline !rounded-none uppercase regular-14 tracking-widest'>Add to cart</button>
                        <button className='btn_dark_rounded !rounded-none uppercase regular-14 tracking-widest'>Buy it now</button>
                    </div>
                    <p><span className='medium-16 text-tertiary'>Category :</span> Women | Jacket | Winter</p>
                    <p><span className='medium-16 text-tertiary'>Tags :</span> Modern | Latest</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProductDisplay