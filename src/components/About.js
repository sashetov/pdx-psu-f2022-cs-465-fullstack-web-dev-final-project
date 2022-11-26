import React from 'react';

function About() {
  console.log('in About');

  return (
    <div className="container mx-auto text-center">
      <h1 className="about display-1">About</h1>
      <p>This is a CS465/565 Final Project by Ariel, Cera, and Alex</p>
      <p>
        We wanted to implement a game using Node.js, React.js, Express.js, and
        Socket.io
      </p>
      <p>We decided on a Tic-Tac-Toe game</p>
      <p>Our project code can be found in: </p>
      <p>
        <a href="https://github.com/gleason9113/465final" target="_blank">
          Project
        </a>
      </p>
      <p>More about each of us can be found in:</p>
      <p>
        <a href="https://github.com/C3ra906" target="_blank">
          Cera's Github
        </a>
      </p>
      <p>
        <a href="" target="_blank">
          Alex's Github
        </a>
      </p>
      <p>
        <a href="" target="_blank">
          Ariel's Github
        </a>
      </p>
    </div>
  );
}

export default About;