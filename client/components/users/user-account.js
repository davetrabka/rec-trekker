import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Card, Button, Form } from 'semantic-ui-react';
import { me, updatedUser } from '../../store';

class UserAccount extends Component {
  state = {
    isLoading: true,
    editing: false,
    user: this.props.user,
  };

  componentDidMount = () => {
    this.props.loadInitialData();
    this.setState({ isLoading: false });
  };

  toggleEditing = evt => {
    this.setState({ editing: !this.state.editing });
  };

  handleChange = evt => {
    let user = { ...this.state.user };
    user[evt.target.name] = evt.target.value;
    this.setState({ user });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.updatedUser({ ...this.state.user });
    this.setState({ editing: false });
  };

  render() {
    const { firstName, lastName, email } = this.state.user;
    return (
      <div>
        <div>
          <img
            id="background-image"
            src="/img/forest.jpeg"
            alt="background image"
          />
        </div>
        <Container className="authorization-form">
          <Card className="auth-card">
            <Card.Content className="auth-card-header">My Account</Card.Content>
            <Card.Content>
              <Form>
                <Form.Group widths="equal">
                  <Form.Field>
                    <label htmlFor="firstName">First Name</label>
                    <input
                      name="firstName"
                      type="text"
                      className="dark-text"
                      value={firstName}
                      onChange={this.handleChange}
                      disabled={!this.state.editing}
                    />
                  </Form.Field>
                  <Form.Field>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      name="lastName"
                      type="text"
                      value={lastName}
                      onChange={this.handleChange}
                      disabled={!this.state.editing}
                    />
                  </Form.Field>
                </Form.Group>
                <Form.Group widths="equal">
                  <Form.Field>
                    <label htmlFor="email">Email</label>
                    <input
                      name="email"
                      type="text"
                      value={email}
                      onChange={this.handleChange}
                      disabled={!this.state.editing}
                    />
                  </Form.Field>
                  <Form.Field>
                    <label htmlFor="password">Password</label>
                    <input
                      name="password"
                      type="text"
                      value="**********"
                      onChange={this.handleChange}
                      disabled={!this.state.editing}
                    />
                  </Form.Field>
                </Form.Group>
                {this.state.editing ? (
                  <React.Fragment>
                    <Button
                      color="teal"
                      content="Submit"
                      labelPosition="left"
                      icon="check"
                      type="submit"
                      onClick={this.handleSubmit}
                    />
                    <Button
                      basic
                      color="teal"
                      icon="remove"
                      onClick={this.toggleEditing}
                    />
                  </React.Fragment>
                ) : (
                  <Button
                    color="teal"
                    content="Edit"
                    labelPosition="left"
                    icon="write"
                    onClick={this.toggleEditing}
                  />
                )}
              </Form>
            </Card.Content>
          </Card>
        </Container>
      </div>
    );
  }
}

const mapLogin = state => ({
  user: state.user,
});

const mapDispatch = dispatch => ({
  loadInitialData: () => dispatch(me()),
  updatedUser: user => dispatch(updatedUser(user)),
});

export default connect(
  mapLogin,
  mapDispatch
)(UserAccount);
