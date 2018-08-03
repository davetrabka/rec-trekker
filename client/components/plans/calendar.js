import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Item, Form, Header } from 'semantic-ui-react';
import Calendar from 'react-calendar/dist/entry.nostyle';
import { gotOnePlan } from '../../store/plan';
import { me } from '../../store/user';

class PlanCalendar extends Component {
  state = { date: new Date() };

  componentDidMount = async () => {
    await this.props.loadInitialData();
    const planUUID = this.props.planUUID;
    await this.props.gotOnePlan(planUUID);
  };

  handleChange = date => this.setState({ date });

  handleSubmit = evt => {
    evt.preventDefault();
  };

  render() {
    return (
      <Item.Group id="calendar-container" className="one-third-width">
        <Header as="h3" dividing>
          Select Dates
        </Header>
        <div className="calendar-items">
          <Calendar onChange={this.onChange} value={this.state.date} />
          <br />
          {this.props.isLoggedIn ? (
            <Form>
              <Button
                color="teal"
                content="Submit"
                labelPosition="left"
                icon="calendar"
                type="submit"
                onClick={this.handleSubmit}
              />
            </Form>
          ) : (
            <Form onSubmit={this.handleSubmit}>
              <Button
                disabled
                color="teal"
                content="Submit"
                labelPosition="left"
                icon="calendar"
                type="submit"
              />
            </Form>
          )}
        </div>
      </Item.Group>
    );
  }
}

const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    currPlan: state.plan.currPlan,
  };
};

const mapDispatch = dispatch => ({
  loadInitialData: () => dispatch(me()),
  gotOnePlan: planUUID => dispatch(gotOnePlan(planUUID)),
});

export default connect(
  mapState,
  mapDispatch
)(PlanCalendar);
