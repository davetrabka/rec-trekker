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
        <Menu.Item id="logo">
          <img src="./img/logo.png" />
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <Button.Group>
              <Button>
                <Link to="/login" className="dark-grey-text">
                  Log In
                </Link>
              </Button>
              <Button.Or text="or" />
              <Button color="teal">
                <Link to="/signup" className="white-text">
                  Sign Up
                </Link>
              </Button>
            </Button.Group>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    ) : (
      <Menu stackable>
        <Menu.Item id="logo">
          <img src="./img/logo.png" />
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
            <Button basic color="teal" className="basic-button">
              <a to="#" className="teal-text" onClick={this.props.handleLogout}>
                Log Out
              </a>
            </Button>
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
