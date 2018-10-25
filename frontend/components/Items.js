import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import ItemsListStyles from './styles/ItemsListStyles';
import Item from './Item';

const Center = styled.div`
  text-align: center;
`;

const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY {
    items {
      id
      title
      price
      description
      image
      largeImage
    }
  }
`;

class Items extends Component {
  render() {
    return (
      <Center>
        <h2>Items</h2>
        <Query query={ ALL_ITEMS_QUERY }>
          { ({ data, error, loading }) => {
            if(loading) return <p>Loading...</p>;
            if(error) return <p>Error: { error.message }</p>;
            return (
              <ItemsListStyles>
                { data.items.map(item => <Item key={ item.id } item={ item }/>)}
              </ItemsListStyles>);
          } }
        </Query>
      </Center>
    );
  }
}

export default Items;