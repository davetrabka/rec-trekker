import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Card, Item, Loader } from 'semantic-ui-react';
import PlanCard from './plan-card';
import { gotPlans } from '../../store/plan';
import { me } from '../../store/user';

class PlansList extends Component {
  state = { isLoading: true };

  componentDidMount = () => {
    this.props.loadInitialData();
    this.props.fetchPlans();
    this.setState({ isLoading: false });
  };

  render() {
    return (
      <Container>
        <img
          id="background-image"
          src="/img/mountain-sunset.jpeg"
          alt="background image"
        />
        {this.state.isLoading ? (
          <Loader active inline="centered" size="massive" className="loader" />
        ) : (
          ''
        )}
        <Card.Group itemsPerRow={3}>
          {this.props.plans.map(plan => <PlanCard key={plan.id} plan={plan} />)}
        </Card.Group>
        {!this.props.plans.length && !this.state.isLoading ? (
          <Card fluid className="no-data-notification">
            <Item>
              <Item.Content>
                <Item.Header className="teal-text article-header">
                  No plans yet... Add one today!
                </Item.Header>
              </Item.Content>
            </Item>
          </Card>
        ) : (
          ''
        )}
      </Container>
    );
  }
}

const mapState = state => ({
  plans: state.plan.allPlans,
});

const mapDispatch = dispatch => ({
  loadInitialData: () => dispatch(me()),
  fetchPlans: () => dispatch(gotPlans()),
});

export default connect(
  mapState,
  mapDispatch
)(PlansList);
