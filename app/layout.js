import { Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import { getCategoryTree } from "@/data";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata = {
  title: "Bearing Manufacturer | Precision Bearings | ARB Bearings",
  description:
    "ARB Bearings is a trusted bearing manufacturer offering high-quality ball, roller, wheel hub and industrial bearings built for precision, durability and performance.",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ARB Bearings",
  url: "https://www.bearingmanufacturers.com/",
  logo: "https://www.bearingmanufacturers.com/logo.png",
  description:
    "ARB Bearings is a bearing manufacturer based in India and a supplier of bearings and industrial bearing solutions to customers in India, Russia, Ukraine, the United States, and international markets.",
  areaServed: [
    {
      "@type": "Country",
      name: "India",
    },
    {
      "@type": "Country",
      name: "Russia",
    },
    {
      "@type": "Country",
      name: "UAE",
    },
    {
      "@type": "Country",
      name: "United States",
    },
  ],
};

export default function RootLayout({ children }) {
  const categories = getCategoryTree();
  return (
    <html lang="en" className={`${poppins.className} h-full antialiased`}>
      <head>
        {/* Yandex.Metrika */}
        <meta name="yandex-verification" content="5fdaf2cd9bb84918" />
        <Script
          id="yandex-metrika"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){
                  m[i]=m[i]||function(){
                    (m[i].a=m[i].a||[]).push(arguments)
                  };
                  m[i].l=1*new Date();

                  for (var j = 0; j < document.scripts.length; j++) {
                    if (document.scripts[j].src === r) {
                      return;
                    }
                  }

                  k=e.createElement(t),
                  a=e.getElementsByTagName(t)[0],
                  k.async=1,
                  k.src=r,
                  a.parentNode.insertBefore(k,a)
              })(window, document, 'script',
                'https://mc.yandex.ru/metrika/tag.js?id=111678511',
                'ym'
              );

              ym(111678511, 'init', {
                ssr: true,
                webvisor: true,
                clickmap: true,
                ecommerce: "dataLayer",
                referrer: document.referrer,
                url: location.href,
                accurateTrackBounce: true,
                trackLinks: true
              });
            `,
          }}
        />

        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ARB Bearings",
              url: "https://www.bearingmanufacturers.com/",
              logo: "https://www.bearingmanufacturers.com/logo.png",
              description:
                "ARB Bearings is a bearing manufacturer based in India and a supplier of bearings and industrial bearing solutions to customers in India, Russia, Ukraine, the United States, and international markets.",
              areaServed: [
                {
                  "@type": "Country",
                  name: "India",
                },
                {
                  "@type": "Country",
                  name: "Russia",
                },
                {
                  "@type": "Country",
                  name: "UAE",
                },
                {
                  "@type": "Country",
                  name: "United States",
                },
              ],
            }),
          }}
        />

        <link rel="canonical" href="https://www.bearingmanufacturers.com/" />

        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({
                'gtm.start': new Date().getTime(),
                event:'gtm.js'
              });

              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),
                  dl=l!='dataLayer'?'&l='+l:'';

              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TDPTJ48F');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TDPTJ48F"
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          />
        </noscript>
        <Navbar categories={categories} />
        {children}
        <ToastContainer position="top-right" />
        <Footer />
        {/* Yandex.Metrika fallback for users without JavaScript */}
        {/* <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/111678511"
              style={{
                position: "absolute",
                left: "-9999px",
              }}
              alt=""
            />
          </div>
        </noscript> */}
      </body>
    </html>
  );
}
