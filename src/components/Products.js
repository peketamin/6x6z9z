import React from "react";
import { Link } from "react-router-dom";
import ProductItemA from "./ProductItem";

export default function Products() {
  return (
    <>
      <h1>Products</h1>
      <p data-hide-on-relar>Visit this page on iOS&nbsp;16 to try webar</p>

      <div className="flex flex-row">
        <div className="flex-initial m-2 w-32">
          <Link to="/product/a">
            <ProductItemA />
          </Link>
        </div>
        <div className="flex-initial m-2 w-32">
          <Link to="/product/a">
            <ProductItemA />
          </Link>
        </div>
      </div>

      <div className="flex flex-row">
        <div className="flex-initial m-2 w-32">
          <Link to="/product/a">
            <ProductItemA />
          </Link>
        </div>
        <div className="flex-initial m-2 w-32">
          <Link to="/product/a">
            <ProductItemA />
          </Link>
        </div>
      </div>
    </>
  );
}
