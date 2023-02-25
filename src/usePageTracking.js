import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

const usePageTracking = () => {
  const location = useLocation();
  const params = new Proxy(new URLSearchParams(location.search), {
    get: (searchParams, prop) => searchParams.get(prop)
  });
  // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
  let via = params.via; // "some_value"
  useEffect(() => {
    // Google Analytics 測定 ID を入力して設定
    ReactGA.initialize("G-Y01YEEJWFQ");
    ReactGA.send({
      hitType: "pageview",
      // アクセスしたパス (pathname) とクエリ文字列 (search) を送付する (必要に応じて編集する)
      page: location.pathname + location.search
    });
    if (via === "qr") {
      ReactGA.event("via_qr", {
        value: "QR経由"
      });
    }
  }, [location, via]);
};

export default usePageTracking;
