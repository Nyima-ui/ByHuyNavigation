import React, { useState } from 'react'
import { motion } from 'framer-motion';

const FillButton = ({children}) => {
  const [ishovering, setishovering] = useState(false); 
  return (
     <button className='py-5 px-7 text-white rounded-full bg-[#3A3733] cursor-pointer font-bold'>
         <motion.span
          initial={false}
         >{children}</motion.span>
     </button>
  )
}

export default FillButton
