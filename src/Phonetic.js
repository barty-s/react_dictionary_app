import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  if (!props.phonetic) {
    return null;
  }

  return (
    <div className="Phonetic">
      <a
        href={props.phonetic.audio}
        target="_blank"
        rel="noreferrer"
        className="audio"
      >
        Listen
      </a>

      {props.phonetic.text}
    </div>
  );
}
