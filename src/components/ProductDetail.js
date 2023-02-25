// https://codesandbox.io/s/webar-forked-6nyozp?file=/src/index.js

import React, { useState, useRef, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import QrCode from "react-qrcode-svg";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon
} from "react-share";
import ReactGA from "react-ga4";

const MODEL_URL =
  "https://developer.apple.com/augmented-reality/quick-look/models/retrotv/tv_retro.usdz";
const urlParameters = {
  allowsContentScaling: "0",
  checkoutSubtitle: "This is just a demo!",
  checkoutTitle: "MVP Demo",
  price: "$100",
  callToAction: "Press me"
};
const objToArKitParams = (paramsObj) =>
  new URLSearchParams(paramsObj).toString().replaceAll("+", "%20");

function ProductDetail() {
  let { id } = useParams();
  const [isTapped, setIsTapped] = useState(false);
  const linkEl = useRef(null);

  useEffect(() => {
    if (linkEl) {
      linkEl.current.addEventListener(
        "message",
        function (event) {
          if (event.data === "_apple_ar_quicklook_button_tapped") {
            // Handle the user tap.
            setIsTapped(true);

            ReactGA.initialize("G-Y01YEEJWFQ");
            ReactGA.event("apple_ar_quicklook_button_tapped", {
              product_id: id
            });
          }
        },
        false
      );
    }
  }, [id]);

  const queryString = objToArKitParams(urlParameters);

  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();

    // 👇️ redirect to /contacts
    history.push(`/thanks/${id}`);
  };

  return (
    <div className="content-center">
      <h3>{isTapped ? "Thank you for trying the MVP!" : `MVP Demo ${id}`}</h3>
      <div>
        <div className="flex flex-row w-full">
          <a
            className="w-1/2"
            ref={linkEl}
            href={`${MODEL_URL}#${queryString}`}
            rel="ar"
          >
            <img
              src="https://developer.apple.com/augmented-reality/quick-look/models/retrotv/retrotv_2x.jpg"
              width="auto"
              height="auto"
              alt=""
            />
          </a>

          <div className="w-1/2">
            <p>
              【多機能携帯テレビ】ポータブルテレビとして使える以外、イヤホン機能付き、ノイズを避けられます。FM/AMラジオ機能も搭載されています。しかも、ＬＥＤライト付き、万が一、災害時やアウトドアや暗い場所でも、LEDライトが活躍します。
            </p>

            <div className="">
              <h4 className="mt-1">
                <span className="text-red-700">398円</span>
                &nbsp;
              </h4>
              <p>
                <small>送料無料</small>
                &nbsp;
                <small>翌日配送</small>
              </p>
              <form onSubmit={handleSubmit}>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 mt-1 rounded"
                  type="submit"
                >
                  購入
                </button>
              </form>
            </div>

            <div className="mt-2" data-name="share">
              <FacebookShareButton
                url="https://6x6z9z.csb.app/product/a"
                title="WebAR Sample"
                // onClick={`alert(777)`}
              >
                <FacebookIcon size={30} round />
              </FacebookShareButton>
              &nbsp;
              <TwitterShareButton
                url="https://6x6z9z.csb.app/product/a"
                title="WebAR Sample"
                via="Hekimen"
                related={["HekimenAR"]}
                hashtags={["ViaHekimen"]}
              >
                <TwitterIcon size={30} round />
              </TwitterShareButton>
            </div>

            <div className="mt-2 qr">
              <QrCode
                data={`https://6x6z9z.csb.app/product/${id}?via=qr`}
                height="100"
                width="100"
                fgColor="#A1B2C3"
                bgColor="#123456"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
