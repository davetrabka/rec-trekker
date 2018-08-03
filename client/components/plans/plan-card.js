import React from 'react';
import { Link } from 'react-router-dom';
import { Item, Button, Card, Icon, Divider } from 'semantic-ui-react';

const PlanCard = props => {
  const { name, shortDescription, UUID } = props.plan;
  let ownerName = props.plan.user ? props.plan.user.firstName : 'Anonymous';

  return (
    <Card fluid className="article-card">
      <Item.Group className="card-min-height">
        <Item>
          <Item.Content>
            <div className="flex-space-between">
              <Item.Header className="teal-text article-header">
                {name}
              </Item.Header>
            </div>
            <Item.Meta>
              <span className="dark-text bold-text">Owner: </span>
              <span className="bold-text">{ownerName}</span>
            </Item.Meta>
            <Divider />
            <Item.Description className="dark-grey-text">
              <span className="bold-text">What:</span> {shortDescription}
            </Item.Description>
          </Item.Content>
        </Item>
      </Item.Group>
      <Card.Content extra className="flex-right white-text">
        <Link to={`/plans/${UUID}`}>
          <Button color="teal" size="small">
            <p className="white-text">
              LEARN MORE <Icon name="arrow alternate circle right" />
            </p>
          </Button>
        </Link>
      </Card.Content>
    </Card>
  );
};

export default PlanCard;
