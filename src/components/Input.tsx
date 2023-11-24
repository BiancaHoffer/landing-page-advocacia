import { ComponentProps } from "react";

interface InputProps extends ComponentProps<'input'> { };

export function Input({ ...props }: InputProps) {
  return (
    <input
      id="input"
      className="pb-4 w-full border-b-[2px] transition-all text-black border-black hover:border-b-primary focus:border-b-primary"
      {...props}
    />
  )
}