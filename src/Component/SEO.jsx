import React from 'react'

import { Helmet } from "react-helmet";


export function SEO({ title, description }) {
return (
<Helmet>
<title>{title}</title>
<meta name="description" content={description} />
<meta name="robots" content="index, follow" />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:type" content="website" />
</Helmet>
);
}
