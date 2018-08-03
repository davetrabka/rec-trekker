import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, Card, Button, Form } from 'semantic-ui-react';
import { login } from '../../store';

const LogIn = props => {
  const { name, handleSubmit, error } = props;
  return (
    <div>
      <div>
        <img
          id="background-image"
          src="/img/mountains.jpg"
          alt="background image"
        />
      </div>
      <Container className="authorization-form">
        <Card className="auth-card">
          <Card.Content className="auth-card-header">Log In</Card.Content>
          <Card.Content>
            <Form onSubmit={handleSubmit} name={name}>
              <Form.Group widths="equal">
                <Form.Field>
                  <label htmlFor="email">Email</label>
                  <input name="email" type="text" placeholder="Email" />
                </Form.Field>
                <Form.Field>
                  <label htmlFor="password">Password</label>
                  <input name="password" type="text" placeholder="Password" />
                </Form.Field>
              </Form.Group>
              <Button
                color="teal"
                content="Log In with Username & Password"
                labelPosition="left"
                icon="user"
                type="submit"
                className="wide-button"
              />
              {error && error.response && <div> {error.response.data} </div>}
            </Form>
            <div className="flex-space-between">
              <Button
                as="a"
                href="/auth/google"
                className="half-button"
                labelPosition="left"
                content="Log In with Google"
                icon="google"
              />
              <Button
                as="a"
                href="/auth/facebook"
                className="half-button"
                labelPosition="left"
                content="Log In with Facebook"
                icon="facebook"
              />
            </div>
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

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const email = evt.target.email.value;
      const password = evt.target.password.value;
      dispatch(login(email, password));
    },
  };
};

export default connect(
  mapLogin,
  mapDispatch
)(LogIn);

LogIn.propTypes = {
  name: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object,
};
