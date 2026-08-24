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

export default function RootLayout({ children }) {
  const categories = getCategoryTree();
  return (
    <html lang="en" className={`${poppins.className} h-full antialiased`}>
      <head>
        {/* Yandex.Metrika */}
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

        <Script id="microsoft-clarity" strategy="beforeInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){
                    (c[a].q=c[a].q||[]).push(arguments)
                };
                t=l.createElement(r);
                t.async=1;
                t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];
                y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "y783t114gh");
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar categories={categories} />
        {children}
        <ToastContainer position="top-right" />
        <Footer />
        {/* Yandex.Metrika fallback for users without JavaScript */}
        <noscript>
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
        </noscript>
      </body>
    </html>
  );
}
