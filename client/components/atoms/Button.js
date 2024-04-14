import Link from "next/link";

export const Button = ({ className, children, onClick, href }) => {
  const button = (
    <button
      className={`${className} px-8 h-16 border-2 rounded-3xl font-sans font-semibold text-2xl flex justify-center items-center`}
      onClick={onClick}
    >
      {children}
    </button>
  );

  return href ? <Link href={href}>{button}</Link> : button;
};
