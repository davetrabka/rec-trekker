import React from 'react';
import { Item, Button, Card, Icon, Divider } from 'semantic-ui-react';

const ArticleCard = props => {
  const { title, id, preview, createdAt } = props.article;
  return (
    <Card fluid className="article-card">
      <Item.Group>
        <Item>
          <Item.Content>
            <div>
              <div className="flex-space-between">
                <Item.Header className="dark-text article-header">
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
                <span className="teal-text ">{id}</span>
              </Item.Meta>
            </div>
            <Divider />
            <Item.Description>{preview}</Item.Description>
          </Item.Content>
        </Item>
      </Item.Group>
      <Card.Content extra className="flex-right">
        <Button color="teal" size="tiny">
          Continue Reading<Icon name="arrow alternate circle right" />
        </Button>
      </Card.Content>
    </Card>
  );
};

export default ArticleCard;
