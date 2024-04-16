export const ImageContainer = ({ children, className }) => {
  return (
    <div className={`overflow-hidden rounded-xl flex justify-center items-center ${className}`}>
      {children}
    </div>
  );
};
