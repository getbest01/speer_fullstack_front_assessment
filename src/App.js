import React, { useState, useEffect } from "react";
import Landing from "./components/Landing";
import Pricing from "./components/Pricing";
import Payments from "./components/Payments";

import "./App.css";

function App() {
  const [showWhat, setShowWhat] = useState("landing");
  const [toRender, setToRender] = useState("");

  function toPricing() {
    setToRender(<Pricing paymentToggle={toPayment} />);
  }

  function toPayment(plan) {
    setToRender(<Payments selectedPlan={plan} />);
  }

  useEffect(() => {
    setShowWhat("landing");
  }, []);

  useEffect(() => {
    switch (showWhat) {
      case "landing":
        setToRender(<Landing pricingToggle={toPricing} />);
        break;
      case "pricing":
        setToRender(<Pricing paymentToggle={toPayment} />);
        break;
      case "payments":
        setToRender(<Payments />);
        break;
      default:
    }
  }, [showWhat]);

  return <>{toRender}</>;
}

export default App;
