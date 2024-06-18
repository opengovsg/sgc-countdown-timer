// App.js

import React, { useEffect, useState } from "react";
import "./App.css";
import QRCode from "qrcode.react"; // Import QRCode component
import { counterBox } from "./timer";

function App() {
  const [countdown1, setCountdown1] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const [countdown2, setCountdown2] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const newYearTime1 = new Date(
      `June 25 ${new Date().getFullYear()} 00:00:00`
    );
    const newYearTime2 = new Date(
      `July 1 ${new Date().getFullYear()} 00:00:00`
    );

    const updateCountDown = (setCountdown, newYearTime) => {
      const interval = setInterval(() => {
        const currentTime = new Date();
        const diff = newYearTime - currentTime;
        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);
        setCountdown({
          days: d < 10 ? `0${d}` : d,
          hours: h < 10 ? `0${h}` : h,
          minutes: m < 10 ? `0${m}` : m,
          seconds: s < 10 ? `0${s}` : s,
        });
      }, 1000);

      return () => clearInterval(interval);
    };

    updateCountDown(setCountdown1, newYearTime1);
    updateCountDown(setCountdown2, newYearTime2);
  }, []);

  return (
    <div className="App">
      <div className="container-fluid">
        <div className="col-12 text-center mx-auto">
          <h0 className="mt-5">
            <b>{new Date().getFullYear()}</b>
          </h0>
          <h1 className="mt-5">SGC Countdown</h1>
        </div>
      </div>
      {counterBox("25 Jun CDC Launch Day", countdown1)}
      {counterBox("1 Jul WOG onboarded", countdown2)}

      <div className="qr-code-container">
        <QRCode
          value="https://github.com/opengovsg/sgc-countdown-timer"
          size={100}
        />
        <p className="text-right">
          Anybody from SGC or Redeem welcome to contribute!
        </p>
      </div>
    </div>
  );
}

export default App;
