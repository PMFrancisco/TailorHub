export const Text = ({ children, variant }) => {
  const baseClass = "font-sans";
  const variantClasses = {
    restaurantTitle: "font-semibold text-4xl",
    SRegular: "text-2xl",
    SSemiBold: "text-2xl font-semibold",
    MSemiBold: "text-4xl font-semibold",
    header: "text-4xl text-[56px] leading-[42px]",
    commentCount: "text-sm",
  };

  const textClass = `${baseClass} ${variantClasses[variant] || ""}`;

  return <p className={textClass}>{children}</p>;
};
