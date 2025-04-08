import { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils/utils';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-2 text-white text-sm font-medium transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400',
        className
      )}
      {...props}
    />
  );
}
