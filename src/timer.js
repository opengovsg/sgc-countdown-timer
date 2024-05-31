export const counterBox = (title, countdown) => {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <h2>{title}</h2>
        <div className="col-lg-4 text-center my-5">
          <div id="countdown" className="countdown">
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
  );
};
