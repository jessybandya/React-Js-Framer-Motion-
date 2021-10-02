import React from 'react'
import { motion } from "framer-motion"


function Quickstart() {
    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }
      
      
    return (
        <div>
            <h4>Yoh</h4>
             <motion.div
    initial="hidden"
    animate="visible"
    variants={variants}
  />
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ duration: 2 }}
  />
        </div>
    )
}

export default Quickstart
