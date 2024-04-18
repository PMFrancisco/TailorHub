import React from "react";

export const TextArea = ({ className, placeholder, onChange, value }) => {
  return (
    <textarea
      className={`w-full border border-none rounded- p-2 ${className} placeholder:text-2xl`}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};
