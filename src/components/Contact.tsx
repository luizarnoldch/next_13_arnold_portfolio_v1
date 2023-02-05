import React from 'react'
import ContactForm from '@/components/Form/ContactForm'
import Image from 'next/image'
import Star from "@/assets/icons/star.png"

type Props = {}

const Contact = (props: Props) => {
  return (
    <div className='h-screen pt-14 bg-white-150'>
      
      <div className='container sm:px-6 mx-auto'>
        {/* Title */}
        <div className='flex w-full flex-col gap-4 items-center justify-center'>
          <Image src={Star} alt='orange_star' className='h-12 w-12' />
          <h1 className=''>Contact</h1>
        </div>
        <p className='mx-auto w-full max-w-[32rem] text-center my-8'>
          Come on, send me a message so we can keep in touch and develop your next project. Do not forget to send me your information so that I can contact you directly if necessary. Wait for your message...
        </p>
        
        {/* Form */}
        <ContactForm />
      </div>
    </div>
  )
}

export default Contact