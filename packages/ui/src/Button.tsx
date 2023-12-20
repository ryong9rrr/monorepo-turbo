'use client';

import { type ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export function Button({ children, className, appName }: ButtonProps): JSX.Element {
  return (
    <button
      className={className}
      onClick={() => {
        alert(`Hello from your ${appName} app!!!!!!`);
      }}
      type="button"
    >
      {children}
    </button>
  );
}
