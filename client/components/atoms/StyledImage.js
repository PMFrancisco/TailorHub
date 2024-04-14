export const StyledImage = ({ src, alt, className = "object-cover" }) => {
  return <img src={src} alt={alt} className={className} />;
};
