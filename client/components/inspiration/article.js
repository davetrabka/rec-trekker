import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Card,
  Item,
  Divider,
  Icon,
  Loader,
} from 'semantic-ui-react';
import { gotOneArticle } from '../../store/article';
import ArticleComments from './comments';

class Article extends Component {
  state = { isLoading: true };

  componentDidMount = async () => {
    const path = window.location.pathname.split('/');
    const articleId = path[path.length - 1];
    await this.props.gotOneArticle(articleId);
    this.setState({ isLoading: false });
  };

  render() {
    let { id, title, content, createdAt, user } = this.props.currArticle;
    let authorName = user ? `${user.firstName} ${user.lastName}` : 'Anonymous';

    return this.state.isLoading ? (
      <div>
        <Loader active inline="centered" size="massive" className="loader" />
        <img
          id="background-image"
          src="/img/ocean.jpeg"
          alt="background image"
        />
      </div>
    ) : (
      <Container text>
        <img
          id="background-image"
          src="/img/ocean.jpeg"
          alt="background image"
        />
        <Card fluid className="article-card">
          <Item>
            <Item.Content>
              <div className="flex-space-between">
                <Item.Header className="teal-text article-header">
                  {title}
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
              <div className="flex-space-between">
                <Item.Meta>{authorName}</Item.Meta>
                <Item.Meta>
                  {new Date(createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </Item.Meta>
              </div>
              <Divider />
              <Item.Description>
                <p>{content}</p>
              </Item.Description>
              <div className="spacer" />
              <ArticleComments articleId={id} />
            </Item.Content>
          </Item>
        </Card>
      </Container>
    );
  }
}

const mapState = state => ({
  currArticle: state.article.currArticle,
});

const mapDisptach = dispatch => ({
  gotOneArticle: id => dispatch(gotOneArticle(id)),
});

export default connect(
  mapState,
  mapDisptach
)(Article);
