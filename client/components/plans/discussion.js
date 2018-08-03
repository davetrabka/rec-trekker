import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Comment, Form, Header } from 'semantic-ui-react';
import { gotOnePlan, postedPlanComment } from '../../store/plan';
import { me } from '../../store/user';

class PlanDiscussion extends Component {
  state = {
    newComment: '',
  };

  componentDidMount = async () => {
    await this.props.loadInitialData();
    const planUUID = this.props.planUUID;
    await this.props.gotOnePlan(planUUID);
  };

  handleChange = evt => {
    this.setState({
      newComment: evt.target.value,
    });
  };

  handleSubmit = async evt => {
    evt.preventDefault();
    const comment = this.state.newComment;
    const authorName = this.props.authorName;
    const planId = this.props.currPlan.id;
    const planUUID = this.props.currPlan.UUID;
    await this.props.postedPlanComment({
      comment,
      authorName,
      planId,
    });
    await this.props.gotOnePlan(planUUID);
    this.setState({ newComment: '' });
  };

  render() {
    const planComments = this.props.currPlan.comments || [];
    return (
      <Comment.Group className="two-third-width">
        <Header as="h3" dividing>
          Add to the Discussion
        </Header>
        {planComments.map(comment => (
          <Comment key={comment.id}>
            <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
            <Comment.Content>
              <Comment.Author as="a">{comment.authorName}</Comment.Author>
              <Comment.Metadata>
                {new Date(comment.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: 'numeric',
                  minute: 'numeric',
                })}
              </Comment.Metadata>
              <Comment.Text>{comment.comment}</Comment.Text>
            </Comment.Content>
          </Comment>
        ))}
        <br />
        {this.props.isLoggedIn ? (
          <Form>
            <Form.TextArea
              name="comment"
              className="comment-textarea"
              value={this.state.newComment}
              onChange={this.handleChange}
            />
            <Button
              color="teal"
              content="Add Comment"
              labelPosition="left"
              icon="edit"
              type="submit"
              onClick={this.handleSubmit}
            />
          </Form>
        ) : (
          <Form onSubmit={this.handleSubmit}>
            <Form.TextArea
              disabled
              placeholder="Must be logged in to leave comment."
              name="comment"
              className="comment-textarea"
            />
            <Button
              disabled
              color="teal"
              content="Add Comment"
              labelPosition="left"
              icon="edit"
              type="submit"
            />
          </Form>
        )}
        <br />
      </Comment.Group>
    );
  }
}

const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    authorName: state.user.firstName + ' ' + state.user.lastName,
    currPlan: state.plan.currPlan,
  };
};

const mapDispatch = dispatch => ({
  loadInitialData: () => dispatch(me()),
  gotOnePlan: planUUID => dispatch(gotOnePlan(planUUID)),
  postedPlanComment: commentObj => dispatch(postedPlanComment(commentObj)),
});

export default connect(
  mapState,
  mapDispatch
)(PlanDiscussion);
