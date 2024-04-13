export const Button = ({ children, onClick }) => {
  return (
    <button
      className="w-52 h-16 border-2 border-black rounded-3xl font-sans font-semibold text-2xl"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
