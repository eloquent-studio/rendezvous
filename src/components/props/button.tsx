import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

interface ButtonProps {
  children?: React.ReactNode
  secondary?: boolean
  fullWidth?: boolean
  disabled?: boolean
  large?: boolean
  type?: "submit" | "button"
  onClick?: () => void
  className?: string
}

const Button = ({ secondary, fullWidth, large, type = "submit", onClick, disabled, children, className = "" }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`rounded-md text-center font-semibold transition-all ease-in duration-500 text-sm border
    ${fullWidth ? 'w-full' : 'w-fit'} 
    ${secondary ? 'bg-zinc-900 hover:bg-zinc-800 text-white border-zinc-900' : 'hover:shadow-xl text-black hover:text-gray-800 border-zinc-500'}
    ${large ? 'px-8 font-medium py-3' : 'px-4 py-1.5'}
    ${className}
    `} >
     {children}
    </button>
  )
}

export default Button