import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'white';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyles = "px-8 py-3 rounded-sm font-serif font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg";
  
  const variants = {
    primary: "bg-chalet-warm text-white hover:bg-[#7D3422] border border-transparent shadow-sm",
    outline: "bg-transparent border-2 border-chalet-warm text-chalet-warm hover:bg-chalet-warm hover:text-white",
    white: "bg-white text-chalet-warm hover:bg-gray-100 border border-transparent shadow-md"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;