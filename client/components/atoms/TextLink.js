import Link from "next/link";

export const TextLink = ({ children, href, className }) => {
    return (
      <Link href={href}>
        <p className={`cursor-pointer ${className}`}>
          {children}
        </p>
      </Link>
    );
  };