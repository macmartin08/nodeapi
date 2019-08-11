import React from "react"; // our imported React libary

function Home() { // our functional component
  return ( // the HTML we're returning
    <header className="home-cta">
      <h1>
        The Adventure of a Lifetime
          <br />
        <small>It was a rainy day in Pizzaville...</small>
      </h1>
    </header>
  );
}

export default Home;