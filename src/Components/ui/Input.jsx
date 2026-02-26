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
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium mb-1">
            {label}
          </label>
        )}

        <div className="relative">
          {prefix && (
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              {prefix}
            </span>
          )}

          <input
            ref={ref}
            className={`w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none
              ${prefix ? "pl-9" : ""}
              ${suffix ? "pr-9" : ""}
              ${error ? "border-red-500" : "border-gray-300"}
              ${className}`}
            {...props}
          />

          {suffix && (
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              {suffix}
            </span>
          )}
        </div>

        {error && (
          <p className="text-red-500 text-xs mt-1">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
