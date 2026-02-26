import { lazy, Suspense } from "react";


// Lazy Loading Example
export const LazyAbout = lazy(() => import("./About"));


export function Loader() {
return (
<div className="flex items-center justify-center h-screen">
<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-800"></div>
</div>
);
}