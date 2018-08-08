import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Card,
  Item,
  Divider,
  Icon,
  Loader,
  Header,
} from 'semantic-ui-react';
import { gotOnePlan } from '../../store/plan';
import PlanDiscussion from './discussion';
import PlanCalendar from './calendar';

class Plan extends Component {
  state = { isLoading: true };

  componentDidMount = () => {
    const path = window.location.pathname.split('/');
    const planUUID = path[path.length - 1];
    this.props.gotOnePlan(planUUID);
    this.setState({ isLoading: false });
  };

  render() {
    let { name, planUUID, longDescription } = this.props.currPlan;

    return this.state.isLoading ? (
      <Loader active inline="centered" size="massive" className="loader" />
    ) : (
      <Container>
        <img
          id="background-image"
          src="/img/lake.jpeg"
          alt="background image"
        />
        <Card fluid className="article-card">
          <Item>
            <Item.Content>
              <div className="flex-space-between">
                <Item.Header className="teal-text article-header">
                  {name}
                </Item.Header>
                <Item.Meta>
                  <span className="teal-text share-this">Share:</span>
                  <a href="#" target="_blank">
                    <Icon
                      color="teal"
                      name="facebook"
                      className="social-link-small"
                    />
                  </a>
                  <a href="#">
                    <Icon
                      color="teal"
                      name="twitter"
                      className="social-link-small"
                    />
                  </a>
                </Item.Meta>
              </div>
              <Divider />
              <Item.Group className="plan-long-description">
                <Header as="h3" dividing>
                  Description
                </Header>
                <Item.Description>
                  <p>{longDescription}</p>
                </Item.Description>
              </Item.Group>
              <div className="spacer" />
              <div className="flex-center">
                <PlanDiscussion planUUID={planUUID} />
                <PlanCalendar planUUID={planUUID} />
              </div>
              <br />
            </Item.Content>
          </Item>
        </Card>
      </Container>
    );
  }
}

const mapState = state => ({
  currPlan: state.plan.currPlan,
});

const mapDisptach = dispatch => ({
  gotOnePlan: planUUID => dispatch(gotOnePlan(planUUID)),
});

export default connect(
  mapState,
  mapDisptach
)(Plan);
