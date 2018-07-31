import React from 'react';
import { Item, Button, Card, Icon, Divider } from 'semantic-ui-react';

const NewArticleCard = () => {
  return (
    <Card fluid className="article-card">
      <Item.Group>
        <Item>
          <Item.Content>
            <div className="flex-space-between">
              <Item.Header className="teal-text article-header">
                Feeling inspired?
              </Item.Header>
            </div>
            <Divider />
            <Item.Description>
              Click here to author a new inspiration piece.
            </Item.Description>
          </Item.Content>
        </Item>
      </Item.Group>
      <Card.Content extra className="flex-right">
        <Button color="teal" circular icon>
          <Icon name="plus" size="large" className="white-text" />
        </Button>
      </Card.Content>
    </Card>
  );
};

export default NewArticleCard;
