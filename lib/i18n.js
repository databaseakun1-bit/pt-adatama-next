import { useRouter } from "next/router";
import { SITE } from "../data/site";
import en from "../locales/en";
import id from "../locales/id";
import ar from "../locales/ar";
import zh from "../locales/zh";

export const DEFAULT_LOCALE = "en";
export const LOCALES = ["en", "id", "ar", "zh"];

const DICTS = { en, id, ar, zh };

export const LANGUAGES = LOCALES.map((code) => ({ code, ...DICTS[code].meta }));

export function getDict(locale) {
  return DICTS[locale] || DICTS[DEFAULT_LOCALE];
}

// React hook used by every component: const { t, locale, dir } = useT();
export function useT() {
  const { locale } = useRouter();
  const t = getDict(locale);
  return { t, locale: t.meta.code, dir: t.meta.dir };
}

// Absolute URL of a page in a given language (used for canonical + hreflang).
export function localeUrl(locale, path = "/") {
  const prefix = locale === DEFAULT_LOCALE ? "" : `/${locale}`;
  const rest = path === "/" ? (prefix ? "" : "/") : path;
  return `${SITE.url}${prefix}${rest}`;
}

// "Cloves (Cengkeh)" when a local name exists, otherwise just the name.
export function productTitle(info) {
  return info.localName ? `${info.name} (${info.localName})` : info.name;
}
