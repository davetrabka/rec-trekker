import React from 'react';
import { Link } from 'react-router-dom';
import { Item, Button, Card, Icon, Divider } from 'semantic-ui-react';

const ArticleCard = props => {
  const { title, slug, preview, createdAt } = props.article;
  let authorName = props.article.user
    ? props.article.user.firstName
    : 'Anonymous';

  return (
    <Card fluid className="article-card">
      <Item.Group>
        <Item>
          <Item.Content>
            <div className="flex-space-between">
              <Item.Header className="teal-text article-header">
                {title}
              </Item.Header>
              <Item.Meta>
                {new Date(createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </Item.Meta>
            </div>
            <Item.Meta>
              <span className="grey-text">{authorName}</span>
            </Item.Meta>
            <Divider />
            <Item.Description>{preview}</Item.Description>
          </Item.Content>
        </Item>
      </Item.Group>
      <Card.Content extra className="flex-right white-text">
        <Button color="teal" size="small">
          <Link to={`/articles/${slug}`}>
            <p className="white-text">
              CONTINUE READING <Icon name="arrow alternate circle right" />
            </p>
          </Link>
        </Button>
      </Card.Content>
    </Card>
  );
};

export default ArticleCard;
