interface CardProps {
  icon?: React.ReactNode;
  title?: string;
  text?: string;
}

export function Card({ icon, title, text }: CardProps) {
  const variant = {
    ligth: "bg-white border-[1px] border-transparent text-primary hover:border-primary",
    dark: "bg-transparent hover:bg-secondary transition-colors text-white",
  }

  return (
    <div className="bg-transparent transition-colors text-white rounded-sm w-full flex flex-col items-center justify-start gap-2 px-8 py-14 md:py-6">
      <div className="bg-white color-white rounded-full p-4 text-[#282828]
      text-4xl mb-5 
      ">
        {icon}
      </div>
      <h2 className="color-white
      text-lg font-semibold text-center 
      ">
        {title}
      </h2>
      <p className="text-sm text-center font-light">
        {text}
      </p>
    </div>
  )
}