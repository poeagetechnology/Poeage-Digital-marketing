import React from "react";
import clsx from "clsx";
import { X } from "lucide-react";

const variantStyles = {
info: "bg-indigo-50 text-indigo-700 border-indigo-200",
success: "bg-emerald-50 text-emerald-700 border-emerald-200",
warning: "bg-amber-50 text-amber-700 border-amber-200",
danger: "bg-red-50 text-red-700 border-red-200",
neutral: "bg-gray-100 text-gray-700 border-gray-200",
};

const sizeStyles = {
sm: "text-xs px-2 py-0.5",
md: "text-sm px-3 py-1",
lg: "text-sm px-4 py-1.5",
};

export default function Badge({
children,
variant = "neutral",
size = "md",
icon: Icon,
dismissible = false,
onDismiss,
className,
}) {
return (
<span
className={clsx(
"inline-flex items-center gap-1 rounded-full border font-medium transition",
variantStyles[variant],
sizeStyles[size],
className
)}
>
{Icon && <Icon size={14} />}

  {children}

  {dismissible && (
    <button
      onClick={onDismiss}
      className="ml-1 hover:opacity-70 transition"
    >
      <X size={12} />
    </button>
  )}
</span>


);
}
