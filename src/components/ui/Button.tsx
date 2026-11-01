import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  id?: string;
  "data-visor-id"?: string;
  className?: string;
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  id,
  "data-visor-id": dataVisorId,
  className = "",
  children,
  ...props
}) => {
  return (
    <button
      id={id}
      data-visor-id={dataVisorId}
      className={`px-6 py-4 rounded-lg font-mono font-semibold tracking-wide transition-all ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

