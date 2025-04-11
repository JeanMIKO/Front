import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'outline' | 'ghost';
  color?: 'primary' | 'secondary' | 'success' | 'danger';
}

const variantStyles = {
  solid: {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-600 hover:bg-gray-700 text-white',
    success: 'bg-teal-600 hover:bg-teal-700 text-white',
    danger: 'bg-rose-600 hover:bg-rose-700 text-white',
  },
  outline: {
    primary: 'border border-blue-600 text-blue-600 hover:bg-blue-50',
    secondary: 'border border-gray-600 text-gray-600 hover:bg-gray-50',
    success: 'border border-teal-600 text-teal-600 hover:bg-teal-50',
    danger: 'border border-rose-600 text-rose-600 hover:bg-rose-50',
  },
  ghost: {
    primary: 'text-blue-600 hover:bg-blue-50',
    secondary: 'text-gray-600 hover:bg-gray-50',
    success: 'text-teal-600 hover:bg-teal-50',
    danger: 'text-rose-600 hover:bg-rose-50',
  },
};

export function Button({
  children,
  variant = 'solid',
  color = 'primary',
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        px-4 py-2 rounded-md transition-colors duration-200
        ${variantStyles[variant][color]}
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
      `}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
