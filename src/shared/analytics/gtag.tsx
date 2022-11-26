import Script from 'next/script';

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

const Gtag = () => {
  return GA_TRACKING_ID ? (
    <>
      <Script
        async
        defer
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        async
        defer
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  ) : null;
};

export default Gtag;
