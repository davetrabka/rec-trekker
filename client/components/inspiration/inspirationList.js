import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Card, Button, Item, Loader } from 'semantic-ui-react';
import ArticleCard from './article-card';
import { gotArticles } from '../../store/article';
import { me } from '../../store/user';

class InspirationList extends Component {
  state = { isLoading: true };

  componentDidMount = async () => {
    await this.props.loadInitialData();
    await this.props.fetchArticles();
    this.setState({ isLoading: false });
  };

  render() {
    return (
      <Container>
        {this.state.isLoading ? (
          <div>
            <Loader
              active
              inline="centered"
              size="massive"
              className="loader"
            />
            <img
              id="background-image"
              src="./img/surfing.jpeg"
              alt="background image"
            />
          </div>
        ) : (
          ''
        )}
        <img
          id="background-image"
          src="./img/surfing.jpeg"
          alt="background image"
        />
        {this.props.isAdmin ? (
          <React.Fragment>
            <Button circular color="teal" id="new-article-button" fluid>
              <Button.Content visible>Add New Post</Button.Content>
            </Button>
            <br />
          </React.Fragment>
        ) : (
          ''
        )}
        {!this.props.articles.length && !this.state.isLoading ? (
          <Card fluid className="no-data-notification">
            <Item>
              <Item.Content>
                <Item.Header className="teal-text article-header">
                  Nothing here... Checkback soon!
                </Item.Header>
              </Item.Content>
            </Item>
          </Card>
        ) : (
          ''
        )}
        <Card.Group itemsPerRow={2}>
          {this.props.articles.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))}
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
