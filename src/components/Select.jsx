import React, { useId, memo } from "react";

const Select = memo(
  React.forwardRef(({ options = [], label, className = "", ...props }, ref) => {
    const id = useId();
    return (
      <div className="w-full">
        {label && <label htmlFor={id}></label>}
        <select
          {...props}
          id={id}
          className={`${className} px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full`}
          ref={ref}
        >
          {options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  })
);

export default Select;
