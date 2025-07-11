import { type ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'outlined' | 'elevated';
}

export default function Card({ 
  children, 
  className = '',
  variant = 'default'
}: CardProps) {
  const baseClasses = 'rounded-lg p-6';
  
  const variants = {
    default: 'bg-white dark:bg-gray-800',
    outlined: 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700',
    elevated: 'bg-white dark:bg-gray-800 shadow-lg',
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  return (
    <div className={classes}>
      {children}
    </div>
  );
} 