import React from "react";
import "./ToggleButton.scss";
import { SiOpenlayers } from "react-icons/si";

export default function ToggleButton(props) {
  const { toggleShow, showBundle, count } = props;

  return (
    <div className="bundle-button d-flex center" onClick={toggleShow}>
      <SiOpenlayers />
      <small>{!showBundle ? "Open" : "Close"} Bundle</small>
      {count > 0 && <span className="bundle-count">{count}</span>}
    </div>
  );
}
