import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

const Landing = () => (
  <React.Fragment>
    <div>
      <img
        id="background-image"
        src="./img/landing-background.jpg"
        alt="background image"
      />
    </div>
    <div className="landing-text-box">
      <div>
        <h1 id="landing-title">RecTrekker.</h1>
        <h3 id="landing-sub-title">
          Turning <span className="dark-grey-text">ideas</span> into{' '}
          <span className="dark-grey-text">action</span>.
        </h3>
      </div>
      <div>
        <Button color="teal" className="landing-button" size="large">
          <Link to="/plan" className="white-text landing-button-text">
            Plan Something
          </Link>
        </Button>
        <Button color="teal" className="landing-button" size="large">
          <Link to="/inspiration" className="white-text landing-button-text">
            Get Inspired
          </Link>
        </Button>
      </div>
    </div>
    <div className="landing-description">
      <p className="description-text hook">Feeling stir crazy?</p>
      <p className="description-text">
        Use RecTrekker to start planning your next group trip – we'll help you
        turn your ideas into action!
      </p>
      <p className="description-text">
        Invite your friends, see who's in, pick dates, and even split up your
        costs! RecTrekker is the only way to travel with your tribe.
      </p>
      <Button
        basic
        color="teal"
        className="description-text register-button"
        size="small">
        <Link to="/signup" className="white-text">
          Register for free today!
        </Link>
      </Button>
    </div>
  </React.Fragment>
);

export default Landing;
