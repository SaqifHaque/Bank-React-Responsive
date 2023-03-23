import React from 'react'

const Button = ({ style, title }) => {
  return (
    <button type="button" className={`py-4 px-6 bg-blue-gradient font-poppins font-medium
    text-[18px] text-primary outline-none rounded-[10px] ${style}`} >{title}</button>
  )
}

export default Button