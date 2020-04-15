import React from "react";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { BrowserRouter } from "react-router-dom";

import ElementDemos from "./components/ElementDemos";
import SplitForm from "./components/demos/SplitForm";

import "./index.css";

const stripePromise = loadStripe("pk_test_l21P14LpAwKLr8AbqKJq6DSC00sz1p1YTp");

const demos = [
  {
    path: "/split-card-elements",
    label: "Split Card Elements",
    component: SplitForm
  }
];

const App = () => {
  return (
    <BrowserRouter>
      <Elements stripe={stripePromise}>
        <ElementDemos demos={demos} />
      </Elements>
    </BrowserRouter>
  );
};

export default App;