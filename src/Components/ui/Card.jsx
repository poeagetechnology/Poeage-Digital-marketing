import React from "react";

export default function Card({
  title,
  children,
  footer,
  hover = true,
  padding = "md",
  shadow = "md",
  className = "",   // 👈 allow parent styling
  ...props          // 👈 forward id, data-*, etc.
}) {
  const paddings = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  const shadows = {
    sm: "shadow-sm",
    md: "shadow",
    lg: "shadow-lg",
  };

  return (
    <div
      {...props}   // 👈 critical: enables id navigation
      className={`
        bg-white rounded-lg border border-gray-200
        ${paddings[padding]}
        ${shadows[shadow]}
        ${hover ? "hover:shadow-xl transition-all duration-300" : ""}
        ${className}
      `}
    >
      {title && (
        <h3 className="text-lg font-semibold mb-3">
          {title}
        </h3>
      )}

      <div>{children}</div>

      {footer && (
        <div className="mt-4 pt-4 border-t">
          {footer}
        </div>
      )}
    </div>
  );
}
