import React, { useEffect } from "react";
import ReactGA from "react-ga4";
import { useParams } from "react-router-dom";

function Thanks() {
  let { id } = useParams();

  useEffect(() => {
    ReactGA.initialize("G-Y01YEEJWFQ");
    ReactGA.event("purchase", {
      currency: "JPY",
      transaction_id: id,
      value: 398
    });
  }, [id]);

  return (
    <>
      <h2>ご購入ありがとうございます</h2>
      品名: {id}
    </>
  );
}
export default Thanks;
