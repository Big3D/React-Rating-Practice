import React from "react";
import { useState } from "react";
import RatingButton from "./RatingButton";
import "./rating-css.css";
import orangeStar from "../../img/icon-star.svg";
import thankYou from "../../img/illustration-thank-you.svg";

export default function Rating() {
  const [selected, setSelected] = useState("");
  const [submit, setSubmit] = useState(false);

  return (
    <div className="background">
      <div className="container">
        <div className={submit ? "rateStart" : null}>
          {/* <div className={submit ? null : "rateStart"}> */}
          <div className="orangeStar">
            <img src={orangeStar} alt="" />
          </div>
          <div className="textContain">
            How did we do?
            <div className="howDo">
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </div>
          </div>
          <div>
            <RatingButton
              identifier="1"
              selected={selected}
              setSelected={setSelected}
            />
            <RatingButton
              identifier="2"
              selected={selected}
              setSelected={setSelected}
            />
            <RatingButton
              identifier="3"
              selected={selected}
              setSelected={setSelected}
            />
            <RatingButton
              identifier="4"
              selected={selected}
              setSelected={setSelected}
            />
            <RatingButton
              identifier="5"
              selected={selected}
              setSelected={setSelected}
            />
          </div>
          <div>
            <button className="submitButton" onClick={() => setSubmit(true)}>
              Submit
            </button>
            {/* <h1>{selected}</h1> */}
          </div>
        </div>
        <div className={submit ? null : "rateEnd"}>
          {/* <div className={submit ? "rateEnd" : null}> */}
          <div className="tyContain">
            <img className="tyImg" src={thankYou} alt="" />
            <div className="tyTopWrap">
              <p className="tyTop">You selected {selected} out of 5</p>
            </div>

            <p className="tyMid">Thank you!</p>

            <p className="tyBot">
              We appreciate you taking the time to give a rating. If you ever
              need more support, don’t hesitate to get in touch!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
