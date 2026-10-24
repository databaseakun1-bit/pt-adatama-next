import Document, { Html, Head, Main, NextScript } from "next/document";

// Sets <html lang> and <html dir> from the active language (Arabic is right-to-left).
const HTML_LANG = { en: "en", id: "id", ar: "ar", zh: "zh-CN" };
const RTL = ["ar"];

export default class MyDocument extends Document {
  render() {
    const locale = (this.props.__NEXT_DATA__ && this.props.__NEXT_DATA__.locale) || "en";
    return (
      <Html lang={HTML_LANG[locale] || "en"} dir={RTL.includes(locale) ? "rtl" : "ltr"}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
