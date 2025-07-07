import React from "react";
import avatarImage from "./assets/Avatar.png"

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Test Image Display</h2>
      <img
        src={avatarImage}
        alt="Avatar Test"
        width={150}
        style={{ border: "1px solid #ccc" }}
      />
    </div>
  );
}

export default App;
