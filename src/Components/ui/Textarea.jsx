import React, { forwardRef, useState } from "react";
import clsx from "clsx";

const Textarea = forwardRef(
  (
    {
      label,
      error,
      helperText,
      maxLength,
      showCount = false,
      resize = "vertical", // none | both | horizontal | vertical
      disabled = false,
      className = "",
      ...props
    },
    ref
  ) => {
    const [valueLength, setValueLength] = useState(0);

    const handleChange = (e) => {
      setValueLength(e.target.value.length);
      if (props.onChange) props.onChange(e);
    };

    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
        )}

        <textarea
          ref={ref}
          disabled={disabled}
          maxLength={maxLength}
          onChange={handleChange}
          className={clsx(
            "w-full rounded-md border px-3 py-2 text-sm focus:outline-none transition",
            "bg-white",
            resize === "none" && "resize-none",
            resize === "both" && "resize",
            resize === "horizontal" && "resize-x",
            resize === "vertical" && "resize-y",
            error
              ? "border-red-500 focus:ring-2 focus:ring-red-200"
              : "border-gray-300 focus:ring-2 focus:ring-cyan-200",
            disabled && "bg-gray-100 cursor-not-allowed",
            className
          )}
          {...props}
        />

        {/* Bottom Row */}
        <div className="flex justify-between mt-1">
          {error ? (
            <p className="text-xs text-red-500">{error}</p>
          ) : (
            helperText && <p className="text-xs text-gray-500">{helperText}</p>
          )}

          {showCount && maxLength && (
            <span className="text-xs text-gray-400">
              {valueLength}/{maxLength}
            </span>
          )}
        </div>
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
export default Textarea;
