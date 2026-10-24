import Head from "next/head";
import { SITE } from "../data/site";
import { LANGUAGES, DEFAULT_LOCALE, useT, localeUrl } from "../lib/i18n";

export default function Seo({
  title,
  description,
  path = "/",
  image = "/images/cengkeh-herosection.jpg",
  jsonLd,
  noindex = false,
}) {
  const { t, locale } = useT();
  const fullTitle = title ? `${title} | ${SITE.name}` : `${SITE.name} | ${t.hero.tagline}`;
  const desc = description || t.seo.description;
  const url = localeUrl(locale, path);
  const img = image.startsWith("http") ? image : `${SITE.url}${image}`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="icon" type="image/png" href="/favicon.png" />

      {noindex ? (
        <meta name="robots" content="noindex" />
      ) : (
        <>
          <link rel="canonical" href={url} />
          {LANGUAGES.map((l) => (
            <link key={l.code} rel="alternate" hrefLang={l.hreflang} href={localeUrl(l.code, path)} />
          ))}
          <link rel="alternate" hrefLang="x-default" href={localeUrl(DEFAULT_LOCALE, path)} />
        </>
      )}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:locale" content={t.meta.ogLocale} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />
      <meta name="twitter:card" content="summary_large_image" />

      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </Head>
  );
}
