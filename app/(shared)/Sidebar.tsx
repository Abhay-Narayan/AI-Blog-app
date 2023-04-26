import React from 'react'
import SocialLinks from './SocialLinks'
import Subscribe from './Subscribe'
import Image from 'next/image'
import ad2 from "/public/assets/ad-2.png"
import proimg from "/public/assets/abhay.jpeg"
type Props = {}

const Sidebar = (props: Props) => {
  return (
    <section>
        <h4 className='bg-wh-900 py-3 px-5 text-wh-50 text-xs font-bold text-center'>
            Subscribe and Follow
        </h4>
        <div className="my-5 mx-5">
            <SocialLinks isDark/>
        </div>
        <Subscribe/>
        <Image
                  className='hidden md:block my-8 w-full'
                  style={{objectFit:"cover"}}
                  placeholder='blur'
                  src={ad2}
                  width={500}
                  height={250}
                  alt='Tech'
                />
        
        <h4 className='bg-wh-900 py-3 px-5 text-wh-50 text-xs font-bold text-center '>
            About the Blog..
        </h4>
        <div className="flex justify-center">
        <Image 
                  style={{ width:"500px", height:"300px", objectFit:"cover"}}
                  placeholder='blur'
                  src={proimg}
                  alt='Tech'
                />
        </div>
        <h4 className=' px-5 text-wh-500 font-bold text-center py-3'>
            Abhay Narayan
        </h4>
        <p className='text-wh-500 text-center text-sm '>
            Hey There.....
        </p>
    </section>
  )
}

export default Sidebar