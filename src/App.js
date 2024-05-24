// App.js

import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [countdown, setCountdown] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const newYearTime = new Date(
      `June 18 ${new Date().getFullYear()} 00:00:00`
    );

    const updateCountDown = () => {
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
    };

    const interval = setInterval(updateCountDown, 1000);

    return () => clearInterval(interval);
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
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-4 text-center my-5">
            <div id="countdown" className="countdown">
              <div className="row">
                <div className="col-6">
                  <div className="time mx-auto">
                    <h1 id="days">{countdown.days}</h1>
                    <small className="mini d-block">Days</small>
                  </div>
                </div>
                <div className="col-6">
                  <div className="time mx-auto">
                    <h1 id="hours">{countdown.hours}</h1>
                    <small className="mini d-block">Hours</small>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-6">
                  <div className="time mx-auto">
                    <h1 id="minutes">{countdown.minutes}</h1>
                    <small className="mini d-block">Minutes</small>
                  </div>
                </div>
                <div className="col-6">
                  <div className="time mx-auto">
                    <h1 id="seconds">{countdown.seconds}</h1>
                    <small className="mini d-block">Seconds</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ... (other HTML content) */}
    </div>
  );
}

export default App;
