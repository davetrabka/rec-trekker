import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';

export const UserHome = props => {
  const { firstName } = props;

  return (
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
          <h1 id="landing-title">Welcome!</h1>
          <h2 id="landing-sub-title">
            Ready to get started,{' '}
            <span className="dark-grey-text">{firstName}</span>?
          </h2>
        </div>
        <div>
          <Button color="teal" className="landing-button" size="large">
            <Link to="/plans" className="white-text landing-button-text">
              Plan Something
            </Link>
          </Button>
          <Button color="teal" className="landing-button" size="large">
            <Link to="/articles" className="white-text landing-button-text">
              Get Inspired
            </Link>
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapState = state => {
  return {
    firstName: state.user.firstName,
  };
};

export default connect(mapState)(UserHome);
