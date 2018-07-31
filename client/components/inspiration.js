import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Card } from 'semantic-ui-react';
import ArticleCard from './article-card';
import NewArticleCard from './article-card-new';
import { gotArticles } from '../store/article';
import { me } from '../store/user';

class InspirationList extends Component {
  componentDidMount() {
    this.props.loadInitialData();
    this.props.fetchArticles();
  }

  render() {
    return (
      <Container>
        <div>
          <img
            id="background-image"
            src="./img/forest.jpeg"
            alt="background image"
          />
        </div>
        <Card.Group itemsPerRow={2}>
          {this.props.isAdmin ? <NewArticleCard /> : ''}
          {this.props.articles.map(article => {
            console.log('mapping an article');
            return <ArticleCard key={article.id} article={article} />;
          })}
        </Card.Group>
      </Container>
    );
  }
}

const mapState = state => ({
  articles: state.article.allArticles,
  isAdmin: state.user.isAdmin,
});

const mapDispatch = dispatch => ({
  loadInitialData: () => dispatch(me()),
  fetchArticles: () => dispatch(gotArticles()),
});

export default connect(
  mapState,
  mapDispatch
)(InspirationList);
