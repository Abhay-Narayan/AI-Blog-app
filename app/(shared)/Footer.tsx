import React from 'react'


const Footer = () => {
  return (
    <footer className='bg-wh-900 text-wh-50 py-10 px-10'>
        <div className='justify-between mx-auto gap-16 sm:flex'>
            {/* Fisrt Column */}
            <div className="mt-16 basis-1/2 sm:mt-0 ">
                <h4 className='font-bold'>The Future Blog</h4>
                <p className='my-5'>Generating the future blogs using the GPT</p>
                <p>© BLOGROBO All Rights Reserved</p>
            </div>
            {/* Second Column */}
            <div className="mt-16 basis-1/4 sm:mt-0 ">
                <h4 className='font-bold'>Links</h4>
                <p className='my-5'>Stil Under Production</p>
                <p className='my-5'>Used GPT btw</p>
                <p>YOO!</p>
            </div>
            {/* Third Column */}
            <div className="mt-16 basis-1/4 sm:mt-0 ">
                <h4 className='font-bold'>Contact Us</h4>
                <p className='my-5'>Social Links</p>
                <p>+91XXXXXXXXXX</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer