import React from "react";
import Wish from "./wish.js";

function MyInfo() {
  return (
    <main>
      <Wish />
      <h1 style={{ color: "#999" }}>Abhinav Upadhyay here</h1>
      <p>You can't afford hearing about me.</p>
      <ul>
        <li>London</li>
        <li>America</li>
        <li>Australia</li>
      </ul>
    </main>
  );
}

export default MyInfo;
