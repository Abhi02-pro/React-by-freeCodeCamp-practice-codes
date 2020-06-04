import React from "react";

import Card from "./card.js";

function App() {
  return (
    <div>
      <Card
        contacts={{
          name: "Mr. White",
          imgUrl: "http://placekitten.com/300/200",
          phone: "(212) 555-1234",
          email: "mr.white@kitten.com",
        }}
      />
      <Card
        contacts={{
          name: "Mr. Black",
          imgUrl: "http://placekitten.com/400/200",
          phone: "(212) 234-1234",
          email: "mr.black@kitten.com",
        }}
      />
      <Card
        contacts={{
          name: "Mr. Red",
          imgUrl: "http://placekitten.com/400/300",
          phone: "(212) 767-1234",
          email: "mr.red@kitten.com",
        }}
      />
      <Card
        contacts={{
          name: "Mr. Green",
          imgUrl: "http://placekitten.com/200/100",
          phone: "(212) 129-1234",
          email: "mr.green@kitten.com",
        }}
      />
    </div>
  );
}

export default App;
