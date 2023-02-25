// https://codesandbox.io/s/webar-forked-6nyozp?file=/src/index.js

import React, { useState, useRef, useEffect } from "react";

function ProductItemA() {
  return (
    <div
      className="App"
      style={{
        fontFamily: "sans-serif",
        textAlign: "center"
      }}
    >
      <div>
        <img
          src="https://developer.apple.com/augmented-reality/quick-look/models/retrotv/retrotv_2x.jpg"
          width={250}
          height={250}
          alt=""
        />
        <h3>Color TV</h3>
        <h4>
          <span className="text-red-700">398円</span>
          &nbsp;<small>送料無料</small>
        </h4>
        <small>翌日配送</small>
      </div>
    </div>
  );
}

export default ProductItemA;
