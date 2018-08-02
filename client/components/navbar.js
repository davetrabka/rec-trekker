import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Menu, Button, Icon } from 'semantic-ui-react';
import { logout, me } from '../store';

class Navbar extends Component {
  componentDidMount = async () => {
    await this.props.loadInitialData();
  };

  render() {
    return (
      <Menu stackable id="menu">
        <Menu.Item>
          {this.props.isLoggedIn ? (
            <Link to="/home">
              <img id="logo" src="/img/logo.png" />
            </Link>
          ) : (
            <Link to="/">
              <img id="logo" src="/img/logo.png" />
            </Link>
          )}
        </Menu.Item>
        <Menu.Item>
          <a href="https://www.facebook.com/rectrekker" target="_blank">
            <Icon color="teal" name="facebook" className="social-link" />
          </a>
          <a href="https://www.instagram.com/rectrekker" target="_blank">
            <Icon color="teal" name="instagram" className="social-link" />
          </a>
        </Menu.Item>
        {!this.props.isLoggedIn ? (
          <Menu.Menu position="right">
            <Menu.Item>
              <Link to="/articles" className="dark-grey-text">
                Find Inspiration
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Button.Group>
                <Link to="/login" className="dark-grey-text">
                  <Button>Log In</Button>
                </Link>
                <Button.Or text="or" />
                <Link to="/signup" className="white-text">
                  <Button color="teal">Sign Up</Button>
                </Link>
              </Button.Group>
            </Menu.Item>
          </Menu.Menu>
        ) : (
          <Menu.Menu position="right">
            <Menu.Item>
              <Link to="/articles" className="dark-grey-text">
                Find Inspiration
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/plans" className="dark-grey-text">
                My Plans
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link
                to={`/users/${this.props.userId}`}
                className="dark-grey-text">
                My Account
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link
                to="#"
                className="teal-text"
                onClick={this.props.handleLogout}>
                <Button color="teal" className="basic-button">
                  Log Out
                </Button>
              </Link>
            </Menu.Item>
          </Menu.Menu>
        )}
      </Menu>
    );
  }
}

const mapState = state => ({
  userId: state.user.id,
  isLoggedIn: !!state.user.id,
});

const mapDispatch = dispatch => ({
  loadInitialData: () => dispatch(me()),
  handleLogout: () => dispatch(logout()),
});

export default connect(
  mapState,
  mapDispatch
)(Navbar);
