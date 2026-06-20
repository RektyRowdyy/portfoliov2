"use client"

import Script from "next/script"

const CAL_LINK = "hridya-dham/30min"
const CAL_NAMESPACE = "30min"

export function CalFloatingButton() {
  return (
    <Script
      id="cal-floating-button"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
          Cal("init", "${CAL_NAMESPACE}", {origin:"https://app.cal.com"});
          Cal.config = Cal.config || {};
          Cal.config.forwardQueryParams = true;

          Cal.ns["${CAL_NAMESPACE}"]("floatingButton", {"calLink":"${CAL_LINK}","config":{"layout":"week_view","useSlotsViewOnSmallScreen":"true","theme":"auto"},"buttonText":"Book my Cal?","hideButtonIcon":false,"buttonPosition":"bottom-left"});
          Cal.ns["${CAL_NAMESPACE}"]("ui", {"hideEventTypeDetails":false,"layout":"week_view"});
        `,
      }}
    />
  )
}
