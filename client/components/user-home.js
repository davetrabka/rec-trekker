import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';

export const UserHome = props => {
  const { email } = props;

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
          <h1 id="landing-title">RecTrekker.</h1>
          <h3 id="landing-sub-title">Hey there, {email}</h3>
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
    </React.Fragment>
  );
};

const mapState = state => {
  return {
    email: state.user.email,
  };
};

export default connect(mapState)(UserHome);

UserHome.propTypes = {
  email: PropTypes.string,
};
