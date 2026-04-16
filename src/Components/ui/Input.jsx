import React, { forwardRef } from "react";

const Input = forwardRef(
(
{
label,
error,
prefix,
suffix,
className = "",
...props
},
ref
) => {
return ( <div className="w-full">


    {/* Label */}
    {label && (
      <label className="block text-sm font-medium mb-1 text-gray-700">
        {label}
      </label>
    )}

    <div className="relative">

      {/* Prefix */}
      {prefix && (
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          {prefix}
        </span>
      )}

      {/* Input */}
      <input
        ref={ref}
        className={`
          w-full rounded-lg px-4 py-2.5 text-sm
          border bg-white
          transition duration-200
          focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
          shadow-sm

          ${prefix ? "pl-10" : ""}
          ${suffix ? "pr-10" : ""}
          ${error ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "border-gray-300"}

          ${className}
        `}
        {...props}
      />

      {/* Suffix */}
      {suffix && (
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
          {suffix}
        </span>
      )}

    </div>

    {/* Error */}
    {error && (
      <p className="text-red-500 text-xs mt-1">{error}</p>
    )}

  </div>
);

}
);

Input.displayName = "Input";
export default Input;
