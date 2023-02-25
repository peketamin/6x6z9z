import React from "react";
import "./styles.css";
import "./styles/tailwind-pre-build.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
import WorkContainer from "./components/WorkContainer";
import HomePage from "./components/Homepage";
import Thanks from "./components/Thanks";
import { Switch, Route } from "react-router-dom";
import usePageTracking from "./usePageTracking";

export default function App() {
  usePageTracking();
  return (
    <div className="flex flex-col h-screen justify-between">
      <Navbar />
      <div className="container max-w-3xl mx-auto px-4 py-4 h-screen">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/products" component={Products} />
          <Route path="/product/:id" component={ProductDetail} />
          <Route path="/thanks/:id" component={Thanks} />
          <Route path="/workcontainer" component={WorkContainer} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}
