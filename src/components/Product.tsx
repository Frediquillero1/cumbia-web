'use client';
import Link from 'next/link';
import { ProductProps } from '../../type';
import Image from 'next/image';
import { urlFor } from '@/lib/sanityClient';
import { BsArrowsFullscreen } from 'react-icons/bs';
import { MdOulineStarPurple500 } from 'react-icons/md';
import { AiOutlineShopping, AioutlineShopping } from 'react-icons/ai';

interface Props {
  product: ProductProps;
  bg?: string;
}

const Product = ({ product }: Props) => {
  return (
    <>
      <div className='w-full relative group border-[1px] border-black hover:shadow-lg duration-200 shadow-gray-500 rounded-md overflow-hidden group'>
        <div className='w-full h-80 flex items-center justify-center bg-white overflow-hidden'>
          <div className={`relative ${''}`}>
            <Link href={`/product/${product.slug?.current}`}>
              <Image
                src={urlFor(product?.image).url()}
                alt='product image'
                width={700}
                height={700}
                className='w-72 h-72 object-contain'
              />
            </Link>
            <div className='abosute bottom-0 flex items-center gap-5 justify-center translate-y-[110%] group-hover:-translate-y-2 transition-transform duration-300'>
              <Link
                href={'/'}
                className='bg-gray-800 text-gray-200 px-4 py-2 text-xs rounded-full flex items-center gap-1 hover:bg-gray-950 hover:text-white duration-200'
              >
                <span>
                  <AiOutlineShopping />
                </span>
                Add to bag
              </Link>
              <Link
                href={'/'}
                className='bg-gray-800 text-gray-200 px-4 py-2 text-xs rounded-full flex items-center gap-1 hover:bg-gray-950 hover:text-white duration-200'
              >
                <span>
                  <BsArrowsFullscreen />
                </span>
                Quick view
              </Link>
            </div>
            <div className='absolute top-2 right-2 z-50'>
              <p className='bg-primeColor px-4 py-1 text-white flex justify-center items-center text-sm font-semibold hover:bg-black duration-300 cursor-pointer rounded-md'>
                New
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
