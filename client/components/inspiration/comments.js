import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Comment, Form, Header } from 'semantic-ui-react';
import { gotOneArticle, postedArticleComment } from '../../store/article';
import { me } from '../../store/user';

class ArticleComments extends Component {
  state = {
    newComment: '',
  };

  componentDidMount = async () => {
    await this.props.loadInitialData();
    const path = window.location.pathname.split('/');
    const articleId = path[path.length - 1];
    await this.props.gotOneArticle(articleId);
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
    const articleId = this.props.currArticle.id;
    await this.props.postedArticleComment({ comment, authorName, articleId });
    await this.props.gotOneArticle(articleId);
    this.setState({ newComment: '' });
  };

  render() {
    const articleComments = this.props.currArticle.comments || [];
    return (
      <Comment.Group>
        <Header as="h3" dividing>
          Leave a Comment
        </Header>

        {articleComments.map(comment => (
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
          <Form onSubmit={this.handleSubmit}>
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
    currArticle: state.article.currArticle,
  };
};

const mapDispatch = dispatch => ({
  loadInitialData: () => dispatch(me()),
  gotOneArticle: id => dispatch(gotOneArticle(id)),
  postedArticleComment: commentObj =>
    dispatch(postedArticleComment(commentObj)),
});

export default connect(
  mapState,
  mapDispatch
)(ArticleComments);
