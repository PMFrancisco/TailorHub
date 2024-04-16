export const Text = ({ children, variant }) => {
  const baseClass = "font-sans";
  const variantClasses = {
    restaurantTitle: "font-semibold text-4xl",
    restaurantDidrection: "text-2xl",
    commentCount: "text-sm",
  };

  const textClass = `${baseClass} ${variantClasses[variant] || ""}`;

  return <p className={textClass}>{children}</p>;
};
