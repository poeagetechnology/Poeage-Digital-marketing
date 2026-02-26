import React from "react";
import { Helmet } from "react-helmet-async";

export default function SEO({
  title = "Poeage Technology | Digital Marketing Company",
  description = "Professional digital marketing, web development, and branding services by Poeage Technology.",
  keywords = "digital marketing, seo, web development, poeage, branding, tamil nadu",
}) {
  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
