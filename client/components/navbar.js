import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Menu, Button } from 'semantic-ui-react';
import { logout, me } from '../store';

class Navbar extends Component {
  state = {};

  componentDidMount() {
    this.props.loadInitialData();
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return !this.props.isLoggedIn ? (
      <Menu stackable id="menu">
        <Menu.Item>
          <Link to="/">
            <img id="logo" src="./img/logo.png" />
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Button
            basic
            circular
            color="teal"
            icon="facebook"
            className="social-button"
          />
          <Button
            basic
            circular
            as="a"
            href="https://www.instagram.com/rectrekker"
            target="_blank"
            color="teal"
            icon="instagram"
            className="social-button"
          />
          <Button
            basic
            circular
            color="teal"
            icon="twitter"
            className="social-button"
          />
          <Button
            basic
            circular
            color="teal"
            icon="linkedin"
            className="social-button"
          />
        </Menu.Item>
        <Menu.Item
          name="inspiration"
          active={activeItem === 'inspiration'}
          onClick={this.handleItemClick}>
          <Link to="/inspiration" className="dark-grey-text">
            Inspiration
          </Link>
        </Menu.Item>
        <Menu.Menu position="right">
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
      </Menu>
    ) : (
      <Menu stackable id="menu">
        <Menu.Item>
          <Link to="/home">
            <img id="logo" src="./img/logo.png" />
          </Link>
        </Menu.Item>
        <Menu.Item
          name="plans"
          active={activeItem === 'plans'}
          onClick={this.handleItemClick}>
          <Link to="/plans" className="dark-grey-text">
            My Plans
          </Link>
        </Menu.Item>
        <Menu.Item
          name="inspiration"
          active={activeItem === 'inspiration'}
          onClick={this.handleItemClick}>
          <Link to="/inspiration" className="dark-grey-text">
            Inspiration
          </Link>
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item
            name="account"
            active={activeItem === 'account'}
            onClick={this.handleItemClick}>
            <Link to="/account" className="dark-grey-text">
              My Account
            </Link>
          </Menu.Item>
          <Menu.Item>
            <a to="#" className="teal-text" onClick={this.props.handleLogout}>
              <Button basic color="teal" className="basic-button">
                Log Out
              </Button>
            </a>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

const mapState = state => ({
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
