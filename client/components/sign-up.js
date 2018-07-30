import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, Card, Button, Form, Icon } from 'semantic-ui-react';
import { auth } from '../store';

const AuthForm = props => {
  const { name, displayName, handleSubmit, error } = props;

  return (
    <div>
      <div>
        <img
          id="background-image"
          src="./img/mountains.jpg"
          alt="background image"
        />
      </div>
      <Container className="authorization-form">
        <Card className="auth-card">
          <Card.Content className="auth-card-header">
            {displayName}
          </Card.Content>
          <Card.Content>
            <Form onSubmit={handleSubmit} name={name}>
              <Form.Group widths="equal">
                <Form.Field fluid>
                  <label htmlFor="email">Email</label>
                  <input name="email" type="text" placeholder="Email" />
                </Form.Field>
                <Form.Field fluid>
                  <label htmlFor="password">Password</label>
                  <input name="password" type="text" placeholder="Password" />
                </Form.Field>
              </Form.Group>
              <Button color="teal" type="submit" className="wide-button">
                <Icon name="send" />
                {displayName} with Username
              </Button>
              {error && error.response && <div> {error.response.data} </div>}
            </Form>
            <Button className="wide-button">
              <a href="/auth/google" className="teal-text">
                <Icon name="google" /> {displayName} with Google
              </a>
            </Button>
          </Card.Content>
        </Card>
      </Container>
    </div>
  );
};

const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Log In',
    error: state.user.error,
  };
};

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error,
  };
};

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const formName = evt.target.name;
      const email = evt.target.email.value;
      const password = evt.target.password.value;
      dispatch(auth(email, password, formName));
    },
  };
};

export const Login = connect(
  mapLogin,
  mapDispatch
)(AuthForm);
export const Signup = connect(
  mapSignup,
  mapDispatch
)(AuthForm);

AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object,
};
