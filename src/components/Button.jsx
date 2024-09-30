import React from 'react';

export default function Button({ children, onClick, variant = 'primary', size = 'medium', disabled = false }) {
  const baseClasses = "font-bold rounded transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 active:translate-y-0.5";
  
  const variantClasses = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-200 text-gray-800 border border-gray-300 hover:bg-gray-300"
  };
  
  const sizeClasses = {
    small: "text-xs py-1 px-2",
    medium: "text-sm py-2 px-4",
    large: "text-base py-3 px-6"
  };
  
  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer";

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses}`;

  return (
    <button 
      className={buttonClasses} 
      onClick={disabled ? null : onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}