import React, { Component, PropTypes } from 'react';

import Card from 'material-ui/lib/card/card';
//import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';

export default class PokeCard extends Component {
  static propTypes = {
    pokemon: PropTypes.object
  };

  render() {
    const { pokemon } = this.props;
    return (
      <Card style={{ width: 200, display: 'inline-block' }}>
        <CardTitle title={pokemon.name} />
      </Card>
    );
  }
}