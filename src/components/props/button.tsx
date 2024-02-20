import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

interface ButtonProps {
  label?: string
  secondary?: boolean
  fullWidth?: boolean
  disabled?: boolean
  large?: boolean
  type?: "submit" | "button"
  onClick?: () => void
  children?: React.ReactNode
  className?: string
}

const Button = ({ label, secondary, fullWidth, large, type = "submit", onClick, disabled, children, className = "" }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`rounded-full text-center text-semibold transition-all ease-in duration-500 text-sm border border-gray-950
    ${fullWidth ? 'w-full' : 'w-fit'} 
    ${secondary ? 'bg-transparent' : 'bg-zinc-100'} 
    ${secondary ? 'hover:bg-zinc-100' : 'hover:bg-gray-950'} 
    ${secondary ? 'text-white' : 'text-black'}
    ${secondary ? 'hover:text-black' : 'hover:text-white'}
    ${large ? 'font-bold' : 'font-bold'}
    ${large ? 'px-8' : 'px-4'}
    ${large ? 'py-2' : 'py-1'}
    ${className}
    `} >
      {label}{children}
    </button>
  )
}

export default Button