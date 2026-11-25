
import Script from "next/script";

export default function InquiryLayout({ children }) {
  return (
    <>
      <Script
        id="microsoft-clarity-2"
        strategy="beforeInteractive"
      >
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
          })(window, document, "clarity", "script", "zi00fw1vi9");
        `}
      </Script>

      <main className="min-h-screen">
        {children}
      </main>
    </>
  );
}
